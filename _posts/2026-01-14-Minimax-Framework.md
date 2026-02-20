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

## Testing Functions

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

## Errors of Testing

Due to the limit of our knowledge, information and ability to infer, our testing function is not always accurate. There are two types of errors in hypothesis testing:<br>
&bull; <b>type-I error</b>: the testing function rejects the null hypothesis $H _{0}$ when actually $H _{0}$ is true; <br>
&bull; <b>type-II error</b>: the testing function fails to reject the null hypothesis $H _{0}$ when actually $H _{1}$ is not true.<br>

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
    <td>type-I Error (False Positive)</td>
  </tr>

  <tr>
    <td><b>Reality:</b> $H _{1}$</td>
    <td>type-II Error (False Negative)</td>
    <td>Correct</td>
  </tr>
</table>
</div>

In most statistical models, to relieve ourselves and simplify the analysis, we assume that our probability model is <em>parametric</em>, i.e., the true distribution $\mathcal{P}$ is indexed by a parameter $\theta \in \varTheta $. Under this assumption, we can rewrite $H _{0}$ and $H _{1}$ as

$$
\begin{aligned}
  H_0 &: f (\theta ) \in R _{1};\\
  H_1 &: f (\theta ) \in R _{2}.
\end{aligned}
$$

Note that our assumption of separation requires that $R_{1} \cap R_{2} = \varnothing$. For example, if we assume that the data are drawn from a Guassian distribution, then the distribution can be parametrized by the mean $\mu$ and the standard deviation $\sigma$, and hence $\varTheta =(\mu, \sigma), \mu \in \mathbb{R}, \sigma>0$. Similarly, if we assume that the data are from a multinomial distribution with $k$ categories, then the distribution can be parametrized by the probabilities of each category $p_{1},\dots,p_{k}$, subject to the constraint that $\sum\limits_{i=1}^{k}p_{i}=1$. In this case, $\varTheta =\left\\{(p_{1},\dots,p_{k}): \sum\limits_{i=1}^{k}p _{i}=1, p _{i}\ge 0 \right\\}$, i.e., a simplex in $\mathbb{R}^{k}$.

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
  where $c$ is a threshold that determined by us (for example, $c=0.1$). In this case, the type-I error is $\mathbb{P}_{0.5}\left(\left|\frac{1}{30}\sum\limits_{i=1}^{30}X _{i}-0.5\right| \ge c\right)$, and the type-II error is $\mathbb{P}_{p}\left(\left|\frac{1}{30}\sum\limits_{i=1}^{30}X _{i}-0.5\right| < c\right)$ for any $p \neq 0.5$. Note that the type-II error depends on the parameter $p$ under $H _{1}$!
</div>

### Significance Level and Risk Function

Let's first define the power function of a testing function given the parameter $\theta $ of the distribution:
<div class="definition" style="">
  For a parameter $\theta \in \varTheta$ and a testing function $T(\cdot )$, the power function of $T$ is defined as
  \[
    \beta (\theta ) = \mathbb{P} _{\theta }(T(X)=1).
  \]
  I.e., the power function is the probability of rejecting the null hypothesis $H _{0}$.
</div>

For most of non-trivial hypothesis testing problem, it is impossible to design a perfect testing function that has both zero type-I and type-II errors. (However, things are not that bad, because it is also impossible to design a testing function that is a total trash --- always making mistakes! Why?) The word "both" is important, because we can trivially achieve zero type-I error by never rejecting $H _{0}$, and achieve zero type-II error by always rejecting $H _{0}$. In other words, to design a good testing function, we should not reduce one type of error simply by sacrificing the other type of error. To balance the two types of errors of a test $T$, we can try to minimize the weighted sum of the two errors, i,e.,

\\[
  R(\theta, T)=\mathbb{E} _{\theta}\left[\omega \cdot \text{type-I error}+(1-\omega )\cdot \text{type-II error}\right].
\\]

When $\omega =\frac{1}{2}$, such risk function can be viewed as an expected loss of the testing function $T$ with the <em>0-1 loss</em> $l(T)=\mathbf{1}_{T(X)=f(\theta )}$.

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

Another good strategy to bound the both errors is to first fix an upper bound $\alpha $ for the type-I error, and see how small we can make the type-II error when restricting our scope within the testing functions that have type-I error no larger than $\alpha $. The $\alpha $ here is called the <em>significance level</em> of the testing function. In other words, if we define $A _{s}(\mathcal{P} _{\theta },\alpha )$ as the set of all testing functions that have type-I error no larger than $\alpha $, then we want to solve the following problem:

<div class="" style="">
  \[
    \min \limits_{T(\cdot ) \in A _{s}(\mathcal{P} _{\theta },\alpha )} \mathbb{P} _{\theta }(T(X)=0).
  \]
</div>

## Multiple Parameters 

The measures mentioned above is only for a single parameter $\theta \in \varTheta$. However, since usually we do care about a hypothesis that contains a set of parameters, how to evaluate the performance of a testing function in this case?

### Prior of the Parameters

If we have a prior distribution $\pi $ on the parameter space $\varTheta $ (as is the case in Bayesian statistics), then a natural way is to "take the average" of the risk function over $\varTheta $. For a given testing function $T(\cdot )$, we have a risk function $R(\theta ,T)$, which is only a function of $\theta $ and irrelevant to the samples. Therefore, we can define the <em>Bayes risk</em> of $T$ as

<div class="" style="">
  \[
    R(T)=\mathbb{E}_{\theta }R(\theta ,T)  
  \]
</div>