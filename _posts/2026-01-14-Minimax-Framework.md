---
title: Hypothesis Testing and Minimax Framework (Under Construction)
excerpt: |
  <div>
  <img src='/assets/images/Academic/minimax_framework/neyman_pearson_lemma.png' alt='' style='max-width: 40%; height: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border-radius: 6px;'>
  <hr style="width: 100%; height: 2px; background-color:#b8b8b8; border: none;">
  </div>
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
last_modified_at: 2026-03-24
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
    \text{Type I error}=\mathbb{P}_{\theta _{0}}(T(X)=1), \theta _{0}\in H _{0}.
\\]

&bull; <b>Type II error</b>: the testing function fails to reject the null hypothesis $H _{0}$ when actually $H _{1}$ is not true.<br>

\\[
    \text{Type II error}=\mathbb{P}_{\theta _{1}}(T(X)=0), \theta _{1}\in H _{1}.
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
  R(T)=\omega \cdot \text{Type I error}+(1-\omega )\cdot \text{Type II error}=\omega \mathbb{P} _{\theta _{0}}(T(X)=1)+(1-\omega )\mathbb{P} _{\theta _{1}}(T(X)=0).
\\]

Such risk can be regarded as putting a prior $\pi $ on the parameters $\theta _{0}$ and $\theta _{1}$: $\mathbb{P} _{\pi }(\theta =\theta _{0})=\omega $, $\mathbb{P}(\theta =\theta _{1})=1-\omega $. When $\omega =\frac{1}{2}$, such risk function can be viewed as an expected loss of the testing function $T$ with the <em>0-1 loss</em> $l(T)=\mathbf{1} _{\left\\{T(X)=f(\theta )\right\\}}$.

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

If we have a prior distribution $\pi $ on the parameter space $\varTheta $ (as is the case in Bayesian statistics), then a natural way is to "take the average" of the risk function over $\varTheta $. For a given testing function $T(\cdot )$, we have a risk function $r(\theta ,T(\mathbf{X}))$, which measures the error of $T$ for each sample $\mathbf{X}$ from $\mathbb{P} _{\theta }$ (for example, the Type I error when $H _{0}$ holds or the Type II error when $H _{1}$ holds). If we take the expectation of $r(\theta ,T(\mathbf{X}))$ over $\mathbf{X}$, we get a quantity $R(\theta ,T)=\mathbb{E} _{\mathbf{X}}r(\theta ,T(\mathbf{X}))$, which is only a function of $\theta $ and irrelevant to the samples. If we continue taking the expectation over $\theta $, we get the <em>Bayes risk</em> of $T$ as

<div class="" style="">
  \[
    R(T)=\mathbb{E}_{\theta }R(\theta ,T) =\displaystyle\int_{\varTheta }^{}R(\theta ,T)d\pi (\theta ).
  \]
</div>

The testing function that minimizes the Bayes risk is called the <em>Bayes test</em>.

Such Bayes risk can actually be defined beyond the testing problem. For any decision problem with a decision function, as long as we have a risk function, we can define the Bayes risk by taking the corresponding expectation. For example, in the estimation problem, the decision function is an estimator $\hat{\theta }$ that aims to provide a good estimation of the true parameter $\theta $. The estimator that minimzes the Bayes risk is called <em >Bayes estimator</em>. A common selected risk function is the mean square error (MSE): $R(\theta ,\hat{\theta })=(\hat{\theta }-\theta )^{2}$. If we denote the prior of $\theta $ as $\pi (\theta )$, then we have 
\\[
  R(\theta ,\hat{\theta })=\displaystyle\int_{\varTheta }^{}\displaystyle\int_{\mathcal{X}}^{}(\hat{\theta }-\theta )^{2}f(x|\theta )\pi (\theta )dx d\theta =\displaystyle\int_{\mathcal{X}}^{}\displaystyle\int_{\varTheta }^{}(\hat{\theta }-\theta )^{2}f(\theta |x)g (x)d \theta dx,
\\]
where $f(\theta |x)$ is the posterior distribution of $\theta $ given the observed data $x$, and $g(x)$ is the marginal distribution of $x$ given the prior $\pi (\theta )$. For the inner integral $\displaystyle\int_{}^{}(\hat{\theta }-\theta )^{2}f(\theta |x)d\theta $, since the estimator $\hat{\theta }$ only depends on the observations $x$, we can minimize it by selecting $\hat{\theta }=\mathbb{E}(\theta |x)$, i.e., the mean of the posterior given $x$. In this way, the whole Bayes risk is also minimized by setting $\hat{\theta }=\mathbb{E}(\theta |x)$. We can prove the minimizer of the Bayes risk given some other risks, as summarized in the following.

- If $R(\theta ,\hat{\theta })=(\hat{\theta }-\theta )^{2}$, the Bayes estimator is the mean of the posterior distribution.

- If $R(\theta ,\hat{\theta })=\|\hat{\theta }-\theta \|$, the Bayes estimator is the median of the posterior distribution.

- If $R(\theta ,\hat{\theta })=\mathbf{1} _{\left\\{\hat{\theta }\neq \theta \right\\}}$, the Bayes estimator is the mode of the posterior distribution.

However, in general, the Bayes estimator is not necessarily a "nice" function of the posterior distribution.

### Optimality of the LRT for Composite Hypotheses

Neyman-Pearson lemma provides the guarantee of the optimality of the likelihood ratio test for simple hypotheses. For composite hypotheses, we still have such optimality under certain conditions.

<div class="definition" style="">
  (Monotone likelihood ratio). For a univariate statistic $t(X)$ with parametric probability mass function (pmf) or probability density function (pdf) $\left\{f _{\theta }(t): \theta \in \varTheta \subset \mathbb{R}\right\}$, we say $t(X)$ has monotone likelihood ratio (MLR) if for any $\theta _{1}>\theta _{0}$, the likelihood ratio $\frac{f _{\theta _{1}}(t)}{f _{\theta _{0}}(t)}$ is a non-decreasing function of $t$.
</div>

For a set of samples $\left\\{X _{1}, X _{2}, \ldots, X _{n}\right\\}$, assume $T(X)$ is a <a href="https://en.wikipedia.org/wiki/Sufficient_statistic" class="custom-link-3">sufficient statistic</a> for $\theta $, then there is still hope that we can find the optimal testing function based on $T(X)$.

<div class="theorem" style="">
  For the composite hypothesis testing problem $H _{0}:\theta \le \theta _{0}$ and $H _{1}:\theta > \theta _{0}$, if a sufficient $T(X)$ with pmf or pdf $\left\{f _{\theta }(T): \theta \in \varTheta \subset \mathbb{R}\right\}$ has MLR, then the testing function defined as
\[
  T(X)=\left\{\begin{aligned}
    1, & \text{ if } T(X) > c;\\
    0, & \text{ otherwise},
  \end{aligned}\right.
\]
and $\alpha :=\mathbb{P}_{\theta _{0}}(T(X)>c)$, is optimal in the sense that for any other testing function $T'(\cdot )$ that satisfies $\sup\limits_{\theta \le \theta _{0}}\mathbb{P}_{\theta }(T ^{\prime }(X)=1)\le \alpha $ and any $\theta > \theta _{0}$, we have 
\[
   \mathbb{P}_{\theta }(T(X)=1)\ge \mathbb{P}_{\theta }(T ^{\prime }(X)=1).
\]
I.e., $T$ has smaller Type II error than $T ^{\prime}$ for any $\theta > \theta _{0}$.
</div>

<div class="proof" style="">
  For simplicity, assume the support of $f _{\theta }(t)$ is $\mathbb{R}$ for all $\theta $. We first prove the fact that the power function $\beta (\theta ,T)$ is non-decreasing with repsect to $\theta $. Since we reject $H _{0}$ when $T(X)>c$, we know that $\beta (\theta ,T)=\displaystyle\int_{c}^{\infty }f _{\theta }(t)dt$. For any $\theta _{1}>\theta _{0}$, consider the difference
  \[
    \beta (\theta _{1},T)-\beta (\theta _{0},T)=\displaystyle\int_{c}^{\infty }f _{\theta _{1}}(t)dt-\displaystyle\int_{c}^{\infty }f _{\theta _{0}}(t)dt=\displaystyle\int_{c}^{\infty }f _{\theta _{0}}(t)\left[\frac{f _{\theta _{1}}(t)}{f _{\theta _{0}}(t)}-1\right]dt.
  \]
  Because $f _{\theta _{0}}(t)$ and $f _{\theta _{1}}(t)$ are both pdfs (or pmfs), we have 
  \[
    \displaystyle\int_{-\infty }^{\infty }f _{\theta _{1}}(t)dt-\displaystyle\int_{-\infty }^{\infty }f _{\theta _{0}}(t)dt=0.
  \]
  Since $\frac{f _{\theta _{1}}(t)}{f _{\theta _{0}}(t)}$ is non-decreasing in $t$, we deduce that $\beta (\theta _{1},T)-\beta (\theta _{0},T)\ge 0$.
  
  Let $k :=\inf\limits _{t>c}\frac{f _{\theta ^{\prime }}(t)}{f _{\theta _{0}}(t)}$, then we have $T>c$ if and only if $\frac{f _{\theta ^{\prime }}(t)}{f _{\theta _{0}}(t)}>k$. Therefore, we can rewrite $T$ as
  \[
  T(X)=\left\{\begin{aligned}
    1, & \text{ if } \frac{f _{\theta ^{\prime }}(T(X))}{f _{\theta _{0}}(T(X))}>k;\\
    0, & \text{ otherwise},
  \end{aligned}\right.
  \]
  which is a likelihood ratio test. By Neyman--Pearson lemma, we know that $T$ has smaller Type II error at $\theta ^{\prime }$ than any other testing function $T ^{\prime }$ that satisfies $\mathbb{P}_{\theta _{0}}(T ^{\prime }(X)=1)\le \sup\limits_{\theta \le \theta _{0}}\mathbb{P}_{\theta }(T ^{\prime }(X)=1)\le \alpha $. Since $\theta ^{\prime }>\theta _{0}$ is arbitary, this completes the proof.
</div>

<span class="small-text" style="color: gray;">There is a symmetric version of the theorem above about the testing problem $H _{0}:\theta \ge \theta _{0}$ and $H _{1}:\theta < \theta _{0}$, can you think of it? Which conditions do you require?</span>

## Minimax Framework

### Minimax Risk

We just discussed the Bayes risk, where the risk on a single parameter is averaged based on the prior $\pi(\theta )$. However, the Bayes risk is not the only way to evaluate a decision rule (can be a testing function, an estimator, etc). When we care more about the <b>worst case scenario</b>, or the prior is not easily available, we can consider the <em>minimax risk</em>. Consider the worst case risk of $T$ over the parameter space $\varTheta $:
\\[
  R _{\text{m}}(T)=\sup\limits _{\theta \in \varTheta }R(\theta ,T).
\\]
The minimax risk of the decision problem is defined as the infimum of $R _{\text{m}}(T)$ over all possible decision rules $T$:
\\[
  R _{\text{m}}^{\star }=\inf \limits _{T}R _{\text{m}}(T)=\inf \limits _{T}\sup\limits _{\theta \in \varTheta }R(\theta ,T).
\\]

A decision rule $T$ that (nearly) achieves the minimax risk is called a <em>minimax decision rule</em>. In other words, a minimax decision rule has the smallest worst case risk among all possible decision rules.

$$
  T ^{\star }=\arg\min \limits _{T} R _{\text{m}}(T)=\arg\min \limits _{T}\sup\limits _{\theta \in \varTheta }R(\theta ,T).
$$

$T^{\star }$ is very cool since he can confidently say "for any other decision rule, it must be at least worse than me in some cases!".

### Minimax Framework for Estimation

In this section, let's assume that $T$ is an estimator for $f(\theta )$. Before we continue the analysis, let's first introduce the concepts of $\delta $-cover and $\delta $-packing.

<div class="definition" style="">
  ($\delta $-cover and $\delta $-packing) Given a metric $\rho $ on a set $S$, a $\delta $-cover of $S$ is a set of points $\left\{x_1, \dots, x_n\right\}$ such that for every $x\in S$, there exists an $i \in \left\{1, \dots,n\right\}$ with $\rho(x,x_i)<\delta $. The $\delta $-covering number of $S$, denoted as $N(\delta ,S, \rho )$, is the minimum cardinality of a $\delta $-cover of $S$. A $\delta $-packing of $S$ is a set of points $\left\{x_1, \dots, x_n\right\}$ such that for all $i\ne j$, we have $\rho(x_i,x_j)\ge \delta $. The $\delta $-packing number of $S$, denoted as $M(\delta ,S, \rho )$, is the maximum cardinality of a $\delta $-packing of $S$.
</div>

<div style="text-align: center;">
  <a href="/assets/images/Academic/minimax_framework/covering_packing.png">
  <img src="/assets/images/Academic/minimax_framework/covering_packing.png" alt="" style="max-width: 90%; height: auto;"></a>
  <figcaption style="margin-top: 1em; margin-bottom: 1.3em;">Illustration of covering and packing. Credit: "High-Dimensional Statistics" by Martin J. Wainwright.</figcaption>
</div>

With such concepts, we can reduce the minimax estimation problem to a multiple hypothesis testing problem. We assume that the space $\left\\{f(\theta )\left\lvert\right. \theta \in \varTheta \right\\}$ is equipped with a metric $\rho $ and the risk function $r$ is an increasing function with respect to $\rho $: $r=r(\rho(f(\theta ),T(X)))$, as is the case for most risks. In this way, the minimax risk can be formulated as
\\[
  \mathop{\arg \min}\limits _{T}\sup \limits _{\theta }\mathbb{E} _{\mathbf{X}}r(\rho(f(\theta ),T(X))).
\\]
The equivalence goes as follows. Suppose $\left\\{f(\theta _{1}),\dots,f(\theta _{M})\right\\}$ is a $2\delta $-packing of $\left\\{f(\theta )\left\lvert\right. \theta \in \varTheta \right\\}$, we sample a point $Y$ from the mixture distribution $\frac{1}{M}\sum\limits _{i=1}^{M}P _{\theta _{i}}$ then we can consider which distribution $P _{\theta _{i}}$ is the source of $Y$. (This is from the definition of the mixture!) A natrual testing strategy is to look at which point in $\left\\{f(\theta _{1}),\dots,f(\theta _{M})\right\\}$ is the closest to $T(Y)$, and select the nearest point as the conclusion: $\hat{\theta } _{0}=\mathop{\arg \min}\limits _{\theta _{i}}\rho (T(Y),f (\theta _{i}))$. The error of such strategy is:
\\[
  \mathbb{P}\left(\hat{\theta } _{0}\neq \theta \right)=\frac{1}{M}\sum\limits _{i=1}^{M}\mathbb{P} _{\theta _{i}}\left(\hat{\theta } _{0}\neq \theta _{i}\right)\overset{\text{(i)}}{\le } \frac{1}{M}\sum\limits _{i=1}^{M}\mathbb{P} _{\theta _{i}}\left(\rho (T(Y),f(\theta _{i}))\ge \delta \right),
\\]
where (i) follows from the definition of $\hat{\theta }$, the definiton of the $2\delta $-packing, and the triangle inequality. Now, by the Markov's inequality, we have
\\[
  \sup\limits _{\theta }\mathbb{E} _{\mathbf{X}}r(\rho(f(\theta ),T(X)))\ge r (\delta )\cdot \frac{1}{M}\sum\limits _{i=1}^{M}\mathbb{P} _{\theta _{i}}\left(\rho (T(Y),f(\theta _{i}))\ge \delta \right)\ge r(\delta ) \mathbb{P}\left(\hat{\theta } _{0}\neq \theta \right)\ge r(\delta )\inf\limits _{\hat{\theta }}\mathbb{P}\left(\hat{\theta }\neq \theta \right).
\\]
Here the infimum in $\inf\limits _{\hat{\theta }}\mathbb{P}\left(\hat{\theta }\neq \theta \right)$ is taken with respect to all possible estimators $\hat{\theta }$, and it does not depend on the choice of $T$ (recall that $\hat{\theta }$ is only the function of the observed data $Y$). Therefore, we can take the infimum over $T$ on both sides for free!
\\[
  \text{minimax risk}\ge r(\delta )\inf\limits _{\hat{\theta }}\mathbb{P}\left(\hat{\theta }\neq \theta \right).
\\]
This is significant! If we can calculate the RHS, then we prove that no estimator can have smaller risk!

When $M=2$, the RHS can be lower bounded by the <a href="https://en.wikipedia.org/wiki/Total_variation_distance_of_probability_measures" class="custom-link-3">total variation distance</a>:
<div class="" style="">
  \[
    \text{RHS}=\frac{r(\delta )}{2}\left[\mathbb{P}_{\theta _{1}}(\hat{\theta }=\theta _{2})+\mathbb{P}_{\theta _{2}}(\hat{\theta }=\theta _{1})\right]=\frac{r(\delta )}{2}\left[1-\mathbb{P}_{\theta _{1}}(\hat{\theta }=\theta _{1})+\mathbb{P}_{\theta _{2}}(\hat{\theta }=\theta _{1})\right]\ge \frac{r(\delta )}{2}\left[1-\text{TV}(\mathbb{P}_{\theta _{1}},\mathbb{P}_{\theta _{2}})\right].
  \]
</div>
This demonstartes that, if we can find two parameters $\theta _{1}$ and $\theta _{2}$ such that $f(\theta _{1})$ and $f(\theta _{2})$ are far away ($2\delta $) in the metric $\rho$, then the minimax risk is at least $r(\delta )\cdot \frac{1-\text{TV}(\mathbb{P} _{\theta _{1}},\mathbb{P} _{\theta _{2}})}{2}$!

<div class="example" style="">
Consider the Gaussian location family $\mathbb{P}_{\mu },\mu \in \mathbb{R}$, where $\mathbb{P}_{\mu }\sim \mathcal{N}(\mu ,\sigma ^{2})$. Given $n$ samples $X _{1},\dots,X _{n}$ from $\mathbb{P}_{\mu }$, we want to estimate $\mu $ with the square error loss. In this example, we have $f(\mu )=\mu $, $\rho (\mu _{1},\mu _{2})=\left|\mu _{1}-\mu _{2}\right|$. For a fixed $\delta >0$, a easy way to construct a $2\delta $-packing set is to select $\mu _{1}=-\delta ,\mu _{2}=\delta $. Then we only need to calculate the total variation distance between $\mathbb{P}^{\otimes n}_{\mu _{1}}$ and $\mathbb{P}^{\otimes n}_{\mu _{2}}$, where $\mathbb{P}^{\otimes n}_{\mu }$ denotes the $n$-fold tensor product of $\mathbb{P}_{\mu }$. It is known (see the exercise 15.10 of "High-Dimensional Statistics" by Martin J. Wainwright) that
\begin{equation*}
    \text{TV}(\mathbb{P}_{\mu _{1}}^{\otimes n},\mathbb{P}_{\mu _{2}}^{\otimes n})\le \frac{1}{4}\left(\exp\left\{\frac{n(\mu _{1}-\mu _{2})^{2}}{\sigma ^{2}}\right\}-1\right)=\frac{1}{4}\left(\exp\left\{\frac{4n\delta ^{2}}{\sigma ^{2}}\right\}-1\right).
\end{equation*}
Therefore we have 
\begin{equation*}
    \text{minimax risk}\ge \frac{r(\delta )}{2}\left[1-\text{TV}(\mathbb{P}_{\mu _{1}}^{\otimes n},\mathbb{P}_{\mu _{2}}^{\otimes n})\right]\ge \frac{r(\delta )}{2}\left(1-\sqrt{\frac{1}{4}\left(\exp\left\{\frac{4n\delta ^{2}}{\sigma ^{2}}\right\}-1\right)}\right).
\end{equation*}
Setting $\delta =\frac{\sigma }{2 \sqrt{n}}$, we have:
\begin{equation*}
    \inf\limits _{T}\sup\limits _{\mu \in \mathbb{R}}\mathbb{E}r(\left|\mu -T(X _{1},\dots,X _{n})\right|)\ge \frac{r(\sigma /(2 \sqrt{n}))}{2}\left(1-\frac{1}{2}\sqrt{e-1}\right).
\end{equation*}
Specially, setting $r(x)=x ^{2}$, we have:
\begin{equation}
    \inf\limits _{T}\sup\limits _{\mu \in \mathbb{R}}\mathbb{E}(\mu -T(X _{1},\dots,X _{n}))^{2}\ge \frac{\sigma ^{2}}{8n}\left(1-\frac{1}{2}\sqrt{e-1}\right).
\end{equation}
</div>
The example above shows that given $X _{1},\dots,X _{n}$, no matter how elaborate the estimator is, there always exists a $\mu \in \mathbb{R}$ such that the square risk is at least in the same rate as $\frac{\sigma ^{2}}{n}$. In fact, the sample mean $\bar{X}=\frac{1}{n}\sum\limits _{i=1}^{n}X _{i}$ has the risk $\mathbb{E}(\mu -\bar{X})^{2}=\frac{\sigma ^{2}}{n}$, which is minimax optimal up to a constant factor. (So do not waste your time!)

Sometimes we do not care about the exact parameter $\theta $, but rather a function of it, which means that $f$ is no longer the identity, but rather a function that maps $\theta $ to $\mathbb{R}$. In such case, the following Le Cam's lemma of functional is useful.

<div class="theorem" style="">
  (Le Cam’s lemma of functional). Define 
\begin{equation*}
    \omega (\epsilon ,f,\varTheta ):=\sup\limits _{\theta _{1},\theta _{2}\in \varTheta }\left\{\left|f(\theta _{1})-f(\theta _{2})\right|\left\lvert\right. H ^{2}(\mathbb{P}_{\theta _{1}}, \mathbb{P}_{\theta _{2}})\le \epsilon ^{2}\right\},
\end{equation*}
where $H(\cdot ,\cdot )$ is the <a href="https://en.wikipedia.org/wiki/Hellinger_distance" class="custom-link-3">Hellinger distance</a> between two probability measures. Then we have:
\begin{equation*}
    \inf\limits _{T}\sup\limits _{\theta \in \varTheta }\mathbb{E}\left[r(T(\mathbf{X})-f(\theta ))\right]\ge \frac{1}{4}r\left(\frac{1}{2}\omega \left(\frac{1}{2 \sqrt{n}},f,\varTheta \right)\right).
\end{equation*}
</div>

<div class="proof" style="">
  For a fixed $\epsilon >0$, take $\theta _{1}, \theta _{2}$ that achieve the supremum in $\omega (\epsilon ,f,\varTheta )$. Then we have $\left|f(\theta _{1})-f(\theta _{2})\right|=\omega \left(\epsilon ,f,\varTheta \right)$ and $H ^{2}(\mathbb{P}_{\theta _{1}}, \mathbb{P}_{\theta _{2}})\le \epsilon ^{2}$. Then we have $\text{TV}^{2}(\mathbb{P}_{\theta _{0}}^{\otimes n},\mathbb{P}_{\theta _{1}}^{\otimes n})\le H ^{2}(\mathbb{P}_{\theta _{1}}^{\otimes n},\mathbb{P}_{\theta _{2}}^{\otimes n})\le nH ^{2}(\mathbb{P}_{\theta _{1}}, \mathbb{P}_{\theta _{2}})\le n\epsilon ^{2}$ (relationship between the total variation distance and the Hellinger distance and the property of the Hellinger distance). In addition, take $\delta =\frac{1}{2}\omega \left(\epsilon ,f,\varTheta \right)$. By the argument above, we have 
\begin{equation*}
    \inf\limits _{T}\sup\limits _{\theta \in \varTheta }\mathbb{E}\left[r(T(\mathbf{X})-f(\theta ))\right]\ge \frac{1}{2}r\left(\frac{1}{2}\omega \left(\epsilon ,f,\varTheta \right)\right)(1-\sqrt{n}\epsilon ).
\end{equation*}
Now setting $\epsilon =\frac{1}{2 \sqrt{n}}$ completes the proof.
</div>