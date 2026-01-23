---
title: Minimax Framework and Hilbert Space (Under Construction)
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
last_modified_at: 2026-01-14
toc: true
permalink: /academic-tags/minimax-framework-and-hilbert-space
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
&bull; <b>type I error</b>: the testing function rejects the null hypothesis $H _{0}$ when actually $H _{0}$ is true; <br>
&bull; <b>type II error</b>: the testing function fails to reject the null hypothesis $H _{0}$ when actually $H _{1}$ is not true.<br>

In most statistical models, to relieve ourselves and simplify the analysis, we assume that our probability model is <em>parametric</em>, i.e., the true distribution $\mathcal{P}$ is indexed by a parameter $\theta \in \varTheta $. Under this assumption, we can rewrite $H _{0}$ and $H _{1}$ as

$$
\begin{aligned}
  H_0 &: f (\theta ) \in R _{1};\\
  H_1 &: f (\theta ) \in R _{2}.
\end{aligned}
$$

Note that our assumption of separation requires that $R_{1} \cap R_{2} = \varnothing$. For example, if we assume that the data are drawn from a Guassian distribution, then the distribution can be parametrized by the mean $\mu$ and the standard deviation $\sigma$, and hence $\varTheta =(\mu, \sigma), \mu \in \mathbb{R}, \sigma>0$. Similarly, if we assume that the data are from a multinomial distribution with $k$ categories, then the distribution can be parametrized by the probabilities of each category $p_{1},\dots,p_{k}$, subject to the constraint that $\sum\limits_{i=1}^{k}p_{i}=1$. In this case, $\varTheta =\left\\{(p_{1},\dots,p_{k}): \sum\limits_{i=1}^{k}p _{i}=1, p _{i}\ge 0 \right\\}$, i.e., a simplex in $\mathbb{R}^{k}$.