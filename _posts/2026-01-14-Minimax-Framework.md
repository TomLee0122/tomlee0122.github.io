---
title: Hypothesis Testing and Minimax Framework (Under Construction)
excerpt: ''
categories:
  - Academic
tags:
  - Statistics
layout: single
mathjax: true
author_profile: true
authors:
  - yikun
related: false
read_time: false
last_modified_at: 2026-01-25
toc: true
permalink: /academic-tags/minimax-framework
---

# <span style="color: #8E403A;">Hypothesis Testing</span>

## Introduction

Hypothesis testing is an fundamental tool in statistics for building a complete and scientific procedure to identify our beliefs about the world and evaluate the errors in our conjectures. Typically, the core of a hypothesis testing procedure consists of two <b>statements</b>:

$$
\begin{aligned}
  H_0 &: \text{A belief about something};\\
  H_1 &: \text{Another belief}.
\end{aligned}
$$

$H _{0}$ is called the <em>null hypothesis</em>, while $H _{1}$ is called the <em>alternative hypothesis</em>. We require that $H _{0}$ and $H _{1}$ are at least mutually exclusive to precisely convey the testing analysis. For example, good $H _{0}$ and $H _{1}$ can be "There will be no rain tomorrow" and "There will be rain tomorrow", or "The vaccine is not effective" and "The vaccine is effective". In contrast, "Tomorrow will be sunny sometime" and "Tomorrow will be rainy sometime" are bad $H _{0}$ and $H _{1}$, since both statements can be true at the same time and therefore it is hard to distinguish them.

### Testing Functions

Once the hypothesis are designed, statisticians need to do another important thing --- design a <b>testing function</b>. Rigorously speaking, a testing function in hypothesis testing is a mapping from the sample space $\mathcal{X}$ to the decision space $\left\\{ 0,1 \right\\}$: $T(\cdot): \mathcal{X}\mapsto \mathcal{A}=\left\\{ 0,1 \right\\}$, where 1 typically represents rejecting the null hypothesis $H_0$ and 0 represents failing to reject the alternative hypothesis $H_0$. <span class="small-text" style="color: gray;">Why instead of saying "accept $H_1$", we say "failing to reject $H_0$"? This is a philosophy question!</span> Note that the testing function $T(\cdot)$ should only depend on the observed data $X \in \mathcal{X}$, and should not depend on any unknown information such as the parameters of the true distribution $\mathcal{P}$ that $X$ is drawn from! (Otherwise, you are actually cheating!) The conditions required for hypothesis statements and testing function are actually very mild, and therefore the hypothesis and the testing function can be very general and flexible.

<div class="example" style="">
  You are a poor statistician who wants to become a millionaire overnight and would like to know whether to buy a lottery ticket today. From your past observations, you know that the winning probability is approximately 0.1. Today you spent your day accosting the lottery buyers, demanding to know whether they win the lottery or not. You decide that if 10% or more of them won the lottery, then you are not going to buy the lottery today since most of the prizes have probably been taken. Otherwise, you will buy a lottery, dreaming of winning the jackpot. You are actually designing a testing function based on your belief. Denote $X _{1},X _{2}, \dots, X _{n}$ as the indicators of whether the $i$-th buyer won the lottery ($1$ if won, $0$ if not). Then your testing function is
  \[
  T(X _{1},X _{2}, \dots, X _{n}) = \left\{\begin{aligned}
    1, & \text{ if } \frac{1}{n}\sum _{i=1} ^{n} X _{i} \ge 0.1;\\
    0, & \text{ otherwise}.
  \end{aligned}\right.
  \]
</div>

<div class="example" style="">
  Ptr and me are debating over whether the average salary of the residents in Tokyo is higher than that in Chicago. To make things fun, we decide to search the true value of the average salary of the residents in Chicago online (denoted by $s _{\text{Chi}}$) and design a strategy by ourselves to guess the average salary of the residents in Tokyo. I come up with a strategy: randomly record 10 job advertisements on the street in Tokyo, and calculate the median of the salaries listed in these advertisements (denoted by $\hat{m} _{\text{Tokyo}}$). I will conclude that the average salary in Tokyo is higher than that in Chicago if $\hat{m} _{\text{Tokyo}}>s _{\text{Chi}}$ and lower otherwise. My testing function can be expressed as
  \[
    T(X _{1},X _{2}, \dots, X _{10})=\mathbf{1} _{\text{median}(X _{1},X _{2}, \dots, X _{10})>s _{\text{Chi}}},
  \]
  where $\mathbf{1}$ is the indicator function. (Will this be a good testing function? Why?)
</div>

### Errors of Testing

Due to the limit of our knowledge, information and ability to infer, our testing function is not always accurate. There are two types of errors in hypothesis testing:<br>
&bull; <b>Type I error</b>: the testing function rejects the null hypothesis $H _{0}$ when actually $H _{0}$ is true; 

\\[
    \text{Type I error}=\mathbb{P}_{H _{0}}(T(X)=1)
\\]

&bull; <b>Type II error</b>: the testing function fails to reject the null hypothesis $H _{0}$ when actually $H _{1}$ is not true.<br>

\\[
    \text{Type II error}=\mathbb{P}_{H _{1}}(T(X)=0)
\\]

<div style="max-width: 90%; text-align: center; margin: 0 auto; margin-bottom: 2em">
<table class="my_table_1" border="1">
  <col style="width: 20%;">
  <col style="width: 40%;">
  <col style="width: 40%;">
  <tr>
    <th></th>
    <th><b>Prediction:</b> $H _{0}$</th>
    <th><b>Prediction:</b> $H _{1}$</th>
  </tr>

  <tr>
    <td><b>Reality:</b> $H _{0}$</td>
    <td>Correct</td>
    <td>Type I Error (False Positive)</td>
  </tr>

  <tr>
    <td><b>Reality:</b> $H _{1}$</td>
    <td>Type II Error (False Negative)</td>
    <td>Correct</td>
  </tr>
</table>
</div>

In most statistical models, to relieve ourselves and simplify the analysis, we assume that our probability model is <em>parametric</em>, i.e., the true distribution $\mathcal{P}$ is indexed by a parameter $\theta \in \varTheta $. Under this assumption, we can rewrite $H _{0}$ and $H _{1}$ as

$$
\begin{aligned}
  H_0 &: f (\theta ) \in R _{1};\\
  H_1 &: f (\theta ) \in R _{2}
\end{aligned}
$$

for some function $f$. Such $f$ can be various. For example, it can be the expectation/variance of $f _{\theta }(x)$, or the maximum density or probability mass: $f=\max\limits _{x \in \mathcal{X}}f _{\theta }(x)$, etc, anything interested! Note that our assumption of separation requires that $R _{1} \cap R _{2} = \varnothing$. For simplicity, let's first assume that our hypotheses are <em >simple</em>, which means $f$ is the identity and $R _{1},R _{2}$ only consist of a single element:

$$
\begin{aligned}
  H_0 &: \theta =\theta _{0};\\
  H_1 &: \theta =\theta _{1}.
\end{aligned}
$$

### Significance Level and Risk Function

Let's first define the power function of a testing function given the parameter $\theta $ of the distribution:
<div class="definition" style="">
  For a parameter $\theta \in \varTheta$ and a testing function $T(\cdot )$, the power function of $T$ is defined as
  \[
    \beta (\theta ,T) = \mathbb{P} _{\theta }(T(X)=1).
  \]
  I.e., the power function is the probability of rejecting the null hypothesis $H _{0}$ under the parameter $\theta $.
</div>

For most of non-trivial hypothesis testing problem, it is impossible to design a perfect testing function that has both zero Type I and Type II errors. (However, things are not that bad, because it is also impossible to design a testing function that is a total trash --- always making mistakes! Why?) The word "both" is important, because we can trivially achieve zero Type I error by never rejecting $H _{0}$, and achieve zero Type II error by always rejecting $H _{0}$. In other words, to design a good testing function, we should not reduce one type of error simply by sacrificing the other type of error. To balance the two types of errors of a test $T$, we can try to minimize the weighted sum of the two errors, i,e.,

\\[
  R(\theta, T)=\mathbb{E} _{\theta}\left[\omega \cdot \text{Type I error}+(1-\omega )\cdot \text{Type II error}\right].
\\]

When $\omega =\frac{1}{2}$, such risk function can be viewed as an expected loss of the testing function $T$ with the <em>0-1 loss</em> $l(T)=\mathbf{1}_{T(X)=f(\theta )}$.

### Neyman-Pearson Framework

A good strategy to select useful testing functions to first fix an upper bound $\alpha $, limit our scope on the testings with Type I error less than $\alpha $, and see how small we can make the Type II error within the scope. The $\alpha $ here is called the <em>significance level</em> of the testing function. In other words, if we define $A _{s}(\mathcal{P} _{\theta },\alpha )$ as the set of all testing functions that have Type I error no larger than $\alpha $, then we want to solve the following problem:

<div class="" style="">
  \[
    \min \limits_{T(\cdot ) \in A _{s}(\mathcal{P} _{\theta },\alpha )} \mathbb{P} _{H _{1}}(T(X)=0).
  \]
</div>

Such approach is called the <a href="http://www.jstor.org/stable/91247" class="custom-link-3"><em >Neyman-Pearson Framework</em></a>. The optimization problem above is not easy in general. However, when $H _{0}$ and $H _{1}$ are simple hypotheses, surprisingly and beautifully, we have very intuitive solution and it is optimal in some sense.

<div class="theorem" style="">
  (Neyman--Pearson Lemma). For the simple hypothesis testing problem $H _{0}:\theta =\theta _{0}$ and $H _{1}:\theta =\theta _{1}$. Let $f _{\theta }(x)$ be the distribution function or density function of $X$ under $\mathbb{P} _{\theta }$. Define the <em >likelihood ratio</em> $L(X):=\frac{f _{\theta _{1}}(X)}{f _{\theta _{0}}(X)}$ and the testing function

  \[
    \begin{equation*}
    T ^{\star }(X)=\left\{\begin{array}{ll}
        1, & \text{if } L(X)\ge k, \\
        0, & \text{if } L(X)<k.
    \end{array}\right.
\end{equation*}
\]

Let $\alpha = \mathbb{P} _{\theta _{0}}(T ^{\star }(X)=1)$. Then $T ^{\star }$ is the necessary and sufficient solution to the UMP level $\alpha $ test (see the explain below), i.e., we have:<br>
&bull; For any testing function $T \in A _{s}(\mathcal{P} _{\theta },\alpha )$, $T ^{\star }$ always has smaller Type II error: $\mathbb{P} _{\theta _{1}}(T(X)=0) \ge \mathbb{P} _{\theta _{1}}(T ^{\star }(X)=0)$; <br>
&bull; Any testing function of a UMP level test must be of the form of $T ^{\star }$ except on a set of measure zero under $\mathbb{P} _{\theta _{0}}$ and $\mathbb{P} _{\theta _{1}}$.
</div>

<div class="proof" style="">
  The proof directly follows from the definition of the likelihood ratio and the construction of $T ^{\star }$. Let's define the \<em >rejection region</em> of $T ^{\star }$ as
  \[
    A :=\left\{x \left\lvert\right. x \in \mathcal{X},T ^{\star }(x)=1\right\}.
  \]
  For any other testing function $T \in A _{s}(\mathcal{P} _{\theta },\alpha )$, we can define the rejection region of $T$ as
  \[
    B :=\left\{x \left\lvert\right. x \in \mathcal{X},T(x)=1\right\}.
  \]
  <div style="text-align: center;">
    <a href="/assets/images/Academic/minimax_framework/neyman_pearson_lemma.png">
    <img src="/assets/images/Academic/minimax_framework/neyman_pearson_lemma.png" alt="" style="max-width: 90%; height: auto;"></a>
  </div>
  Since $T$ is a level $\alpha $ test, we know that $\displaystyle\int_{B}^{}f _{\theta _{0}}(x)dx \le \alpha =\displaystyle\int_{A}^{}f _{\theta _{0}}(x)dx$. Cancelling the common part $A \cap B$ from both sides, we have 
  \[
    \displaystyle\int_{B \cap A ^{\complement }}^{}\frac{1}{k}f _{\theta _{1}}(x)dx\overset{\text{(i)}}{\le }\displaystyle\int_{B \cap A ^{\complement }}^{}f _{\theta _{0}}(x)dx\le \displaystyle\int_{A \cap B ^{\complement }}^{}f _{\theta _{0}}(x)dx \overset{\text{(i)}}{\le } \displaystyle\int_{A \cap B ^{\complement }}^{}\frac{1}{k}f _{\theta _{1}}(x)dx,
  \]
  where (i) follows from the definition of $T ^{\star }$ and the likelihood ratio. The inequality above merely says that
  \[
    \displaystyle\int_{B \cap A ^{\complement }}^{}f _{\theta _{1}}(x)dx \le \displaystyle\int_{A \cap B ^{\complement }}^{}f _{\theta _{1}}(x)dx.
  \]
  If we add the common part $\displaystyle\int_{A \cap B}^{}f _{\theta _{1}}(x)dx$ to both sides, we have
  \[
    \mathbb{P}_{\theta _{1}}(T(X)=1)\le \mathbb{P}_{\theta _{1}}(T ^{\star }(X)=1).
  \]
  The equality holds only when $A \cap B ^{\complement }$ and $B \cap A ^{\complement }$ are both of measure zero under $\mathbb{P} _{\theta _{0}}$ and $\mathbb{P} _{\theta _{1}}$. This completes the proof.
</div>

### ROC Curve

We have Type I and Type II errors to evaluate the performance of a testing function. However, we are still not satisfied with these mere two numbers. Is there any way to illustrate a testing function more intuitively and visually? In this view, the <em >receiver operating characteristic</em> (ROC) curve is a good choice! However, the ROC curve is not applied to a single testing function, but rather a family of them. Typically, a testing function is <em >fixed</em> somehow, meaning that we have a raw function inside the testing function and a threshold $c$ to determine the final decision. For example, in the Neyman--Pearson lemma, the raw function is the likelihood function $L(X)$, and the threshold is $k$. In this way, the Type I and II errors are fixed. In the ROC curve, instead, we give the testing function "more freedom" by allowing the threshold to vary. These, definitely, will change the Type I and II errors. If we draw the plot of the Type I error (x-axis) and the power under $H _{1}$ (y-axis) as the threshold varies, this is the ROC curve!

<div style="text-align: center;">
  <a href="/assets/images/Academic/minimax_framework/Gemfile.svg">
  <img src="/assets/images/Academic/minimax_framework/Gemfile.svg" alt="" style="max-width: 60%; height: auto;"></a>
  <figcaption style="margin-top: 1em; margin-bottom: 1.3em;">The ROC curve. Credit: <a href="https://en.wikipedia.org/wiki/Receiver_operating_characteristic" class="custom-link-3">https://en.wikipedia.org/wiki/Receiver_operating_characteristic </a>.</figcaption>
</div>

The x-axis of the plot is the "false positive rate", which means "among all of the cases in $H _{0}$, how many are wrongly detected as $H _{1}$?", which is exactly the Type I error; the y-axis is "among all of the cases in $H _{1}$, how many are correctly concluded?", which is $1-\text{Type II error}$. The line connecting $(0,0)$ and $(1,1)$ represents the random guess (since we are guessing randomly, the probability of concluding $H _{1}$ is the same under both $H _{0}$ and $H _{1}$). The very left top corner represents the perfect test, which has zero Type I and Type II errors. This perfect test, however, rarely exists. As long as any $\mathbb{P}$ in $H _{0}$ and $\mathbb{Q}$ in $H _{1}$ has positive total variation distance, i.e., $\max\limits _{\mathbb{P}\in H _{0},\mathbb{Q}\in H _{1}}\text{TV}(\mathbb{P},\mathbb{Q})>0$, then such perfect test does not exist. In this plot, every curve starts at $(0,0)$ (representing that it never rejects $H _{0}$, and therefore cannot correctly detect any case in $H _{1}$ either), and ends at $(1,1)$ (representing that it always rejects $H _{0}$, and therefore wrongly rejects all the cases in $H _{0}$). Additionally, the closer the curve is to the top left corner, the better the testing function is. If one curve is always above another curve, then the testing function corresponding to the upper curve is better than the other one. The area under the curve (AUC) is roughly a summary of the performance of the testing function. An area close to $1$ means that the testing function is very accurate, while an area close to $0.5$ means that the testing function is as bad as random guess. These properties of ROC can be easily verified by the definition of the ROC curve and the plot.

### $F$-$1$ Score

$F$-$1$ score is also a popular evaluation for a testing function, where $F$-1 score is defined as
\\[
  F\text{-}1 = \frac{2}{\frac{1}{\text{precision}}+\frac{1}{\text{recall}}}=\frac{2\cdot \text{precision}\cdot \text{recall}}{\text{precision}+\text{recall}},
\\]

where precision and recall are defined as

<div class="" style="">
  \[
  \begin{aligned}
    \text{precision} &= \frac{\text{true positive}}{\text{true positive}+\text{false positive}};\\
    \text{recall} &= \frac{\text{true positive}}{\text{true positive}+\text{false negative}}.
  \end{aligned}
  \]
</div>

In other words, precision measures "in all of predicted positive cases, how many are actually positive". Low precision means the overlap of the predicted positive cases and the actual positive cases is small compared to the size of the predicted positive cases --- there are many false alarms. Recall measures "in all of actual positive cases, how many are predicted positive". Low recall means among the actual positive cases, most are missed by the testing funciton. Both low precision and low recall are undesirable, and will lead to poor $F$-$1$ score. (Why is $F$-$1$ score not defined as the arithmetic mean of precision and recall?) Note that the roles of the actual postive cases and the predicted positive cases are not symmetric in the definitions of precision and recall, which provide a good reason to explain why typically the testing problem is not equivalent when we exchange $H _{0}$ and $H _{1}$.

## Multiple Parameters 

The measures mentioned above is only for a single parameter $\theta \in \varTheta$. However, since usually we do care about a hypothesis that contains a set of parameters, how to evaluate the performance of a testing function in this case?

For example, if we assume that the data are drawn from a Guassian distribution, then the distribution can be parametrized by the mean $\mu$ and the standard deviation $\sigma$, and hence $\varTheta =(\mu, \sigma), \mu \in \mathbb{R}, \sigma>0$. Similarly, if we assume that the data are from a multinomial distribution with $k$ categories, then the distribution can be parametrized by the probabilities of each category $p_{1},\dots,p_{k}$, subject to the constraint that $\sum\limits_{i=1}^{k}p_{i}=1$. In this case, $\varTheta =\left\\{(p_{1},\dots,p_{k}): \sum\limits_{i=1}^{k}p _{i}=1, p _{i}\ge 0 \right\\}$, i.e., a simplex in $\mathbb{R}^{k}$.

<div class="example" style="">
  We would like to determine whether a coin has fair sides. Assume 30 experiments were performed, and we obtained the results formulated as $X _{1},\dots,X _{30}$, where $X _{i}=1$ means the $i$-th experiment resulted in head, otherwise $0$. The distribution in this model is the Binomial distribution with the parameters $n=30$ (known) and $p$ (unknown). A natural guess for $p$ based on the experiments is $\hat{p}=\frac{1}{30}\sum\limits_{i=1}^{30}X _{i}$. Therefore, we can reasonably suspect that the coin is not fair if $\hat{p}$ is too far away from $0.5$. We can formulate our hypothesis as

  \[
    \begin{aligned}
         & H _{0}:p=0.5,      \\
         & H _{1}:p \neq 0.5.
    \end{aligned}
  \]

  Our test will be

  \[
    T(X _{1},X _{2}, \dots, X _{30}) = \left\{\begin{aligned}
      1, & \text{ if } |\hat{p}-0.5| \ge c;\\
      0, & \text{ otherwise},
    \end{aligned}\right.
  \]
  where $c$ is a threshold that determined by us (for example, $c=0.1$). In this case, the Type I error is $\mathbb{P}_{0.5}\left(\left|\frac{1}{30}\sum\limits_{i=1}^{30}X _{i}-0.5\right| \ge c\right)$, and the Type II error is $\mathbb{P}_{p}\left(\left|\frac{1}{30}\sum\limits_{i=1}^{30}X _{i}-0.5\right| < c\right)$ for any $p \neq 0.5$. Note that the Type II error depends on the parameter $p$ under $H _{1}$!
</div>

<span class="small-text" style="color: gray;">In the example above, what can you conclude about the Type II error for general $p \neq 0.5$?</span>

### Prior of the Parameters

If we have a prior distribution $\pi $ on the parameter space $\varTheta $ (as is the case in Bayesian statistics), then a natural way is to "take the average" of the risk function over $\varTheta $. For a given testing function $T(\cdot )$, we have a risk function $R(\theta ,T)$, which is only a function of $\theta $ and irrelevant to the samples. Therefore, we can define the <em>Bayes risk</em> of $T$ as

<div class="" style="">
  \[
    R(T)=\mathbb{E}_{\theta }R(\theta ,T)  
  \]
</div>

The testing function that minimizes the Bayes risk is called the <em>Bayes test</em>.

Such Bayes risk can actually be defined beyond the testing problem. For any decision problem with a decision function, as long as we have a risk function, we can define the Bayes risk by taking the corresponding expectation. For example, in the estimation problem, the decision function is an estimator $\hat{\theta }$ that aims to provide a good estimation of the true parameter $\theta $. The estimator that minimzes the Bayes risk is called <em >Bayes estimator</em>. A common selected risk function is the mean square error (MSE): $R(\theta ,\hat{\theta })=(\hat{\theta }-\theta )^{2}$. If we denote the prior of $\theta $ as $\pi (\theta )$, then we have 
\\[
  R(\theta ,\hat{\theta })=\displaystyle\int_{}^{}\displaystyle\int_{\mathcal{X}}^{}(\hat{\theta }-\theta )^{2}f(x|\theta )\pi (\theta )dx d\theta =\displaystyle\int_{\mathcal{X}}^{}\displaystyle\int_{}^{}(\hat{\theta }-\theta )^{2}f(\theta |x)g (x)d \theta dx,
\\]
where $f(\theta |x)$ is the posterior distribution of $\theta $ given the observed data $x$, and $g(x)$ is the marginal distribution of $x$ given the prior $\pi (\theta )$. For the inner integral $\displaystyle\int_{}^{}(\hat{\theta }-\theta )^{2}f(\theta |x)d\theta $, since the estimator $\hat{\theta }$ only depends on the observations $x$, we can minimize it by selecting $\hat{\theta }=\mathbb{E}(\theta |x)$, i.e., the mean of the posterior given $x$. In this way, the whole Bayes risk is also minimized by setting $\hat{\theta }=\mathbb{E}(\theta |x)$. We can prove the minimizer of the Bayes risk given some other risks, as summarized in the following.

- If $R(\theta ,\hat{\theta })=(\hat{\theta }-\theta )^{2}$, the Bayes estimator is the mean of the posterior distribution.

- If $R(\theta ,\hat{\theta })=\|\hat{\theta }-\theta \|$, the Bayes estimator is the median of the posterior distribution.

- If $R(\theta ,\hat{\theta })=\mathbf{1} _{\left\\{\hat{\theta }\neq \theta \right\\}}$, the Bayes estimator is the mode of the posterior distribution.

However, in general, the Bayes estimator is not necessarily a "nice" function of the posterior distribution.

### Optimality of the Likelihood Ratio Test

Neyman-Pearson lemma provides the guarantee of the optimality of the likelihood ratio test for simple hypotheses. For composite hypotheses, 

## Minimax Framework