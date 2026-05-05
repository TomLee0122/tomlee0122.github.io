---
title: Conditional Expectation and Martingale (Under construction)
excerpt: |
  <div class="excerpt-image-container" style="max-width: 60%; position: relative;">
    
    <img src='/assets/images/Academic/ce_martingale/two_random_walks.png' 
         alt='excerpt light' 
         class="img-light" 
         style='width: 100%; height: auto; display: block;'>
    
    <img src='/assets/images/Academic/ce_martingale/two_random_walks_invert.png' 
         alt='excerpt dark' 
         class="img-dark" 
         style='width: 100%; height: auto; position: absolute; top: 0; left: 0;'>
         
  </div>
  <hr style="width: 100%; height: 2px; background-color:#b8b8b8; border: none;">
categories:
  - Academic
tags:
  - Probability
layout: single
mathjax: true
author_profile: true
authors:
  - yikun
related: false
read_time: false
last_modified_at: 2026-04-23
toc: true
permalink: /academic-tags/ce_martingale_EN
---

<b>这篇 blog 的<a href="/academic-tags/ce_martingale" class="custom-link-3">中文版本</a>。</b>

# <span style="color: #8E403A;">Foreword</span>

This blog serves as a collection of interesting results and exercises about conditional expectation and martingale. It does not aim to be a comprehensive tutorial on the topic. The content is collected from various textbooks and lecture notes, and the difficulty level should be not higher than PhD level measure theory or stochastic process courses. Currently, this blog is still under construction. If you have any suggestions or want to contribute, please feel free to contact me!

# <span style="color: #8E403A;">Conditional Expectation</span>

## Regular Conditional Probability

Based on the definition of conditional expectation, we can naturally define conditional probability. For an arbitrary measure space $\left(\Omega ,\mathscr{F},\mu \right)$, a sub-$\sigma$-algebra $\mathscr{G}$ of $\mathscr{F}$, and a set $A$ in $\mathscr{F}$, the conditional probability of $A$ given $\mathscr{G}$ is defined as:

\\[
  \mathbb{P}\left(A\left\lvert\right. \mathscr{G}\right):=\mathbb{E}\left[\mathbf{1}_{A}\left\lvert\right. \mathscr{G}\right].
\\]

According to the monotonicity and linearity of conditional expectation, we have:<br>
(1). For any $A,B \in \mathscr{F}$ with $A \subset B$:

\\[
  0=\mathbb{P}\left(\varnothing \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(A \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(B \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(\Omega \left\lvert\right. \mathscr{G}\right)=1, a.s.
\\]<br>
(2). For any countable measurable partition $\left\\{A _{n}\right\\} _{n=1}^{\infty}$ of $\left(\Omega ,\mathscr{F}\right)$, we have:
\\[
  \mathbb{P}\left(\bigcup\limits _{n=1}^{\infty }A _{n}\left\lvert\right. \mathscr{G}\right)=\sum\limits _{n=1}^{\infty }\mathbb{P}\left(A _{n}\left\lvert\right. \mathscr{G}\right), a.s.
\\]

We observe that although conditional probability is a random variable (since conditional expectation is a random variable), apart from the restriction of "a.s." equivalence classes, its properties seem very similar to those of a general probability measure. This leads us to wonder: for any sub-$\sigma$-algebra $\mathscr{G}$ of a general measure space $\left(\Omega ,\mathscr{F}\right)$, can we always define a bivariate function $P _{\mathscr{G}}(\cdot ,\cdot ):\left(\Omega \times \mathscr{F}\right)\rightarrow \mathbb{R}$ such that:<br>
(1). For any set $A$ in $\mathscr{F}$, $P _{\mathscr{G}}(\cdot ,A)$ is the conditional probability of $A$ given $\mathscr{G}$.<br>
(2). For any $\omega$ in $\Omega$, $P _{\mathscr{G}}(\omega ,\cdot )$ is a probability measure on $\left(\Omega ,\mathscr{F}\right)$.

If such a bivariate function $P _{\mathscr{G}}(\cdot ,\cdot )$ can be defined, then we could treat conditional probability as a random measure. Furthermore, if we want to compute the conditional expectation $\mathbb{E}\left[g(f)\left\lvert\right. \mathscr{G}\right]$ of $g(f)$, we could directly integrate over the regular conditional probability of $f$ given $\mathscr{G}$, just like computing a standard expectation.

Naturally, we might think: would it be sufficient to directly define $P _{\mathscr{G}}(\omega ,A):=\mathbb{P}\left(A\left\lvert\right. \mathscr{G}\right)(\omega )$? For condition (1), this definition naturally satisfies the requirement. For condition (2), if we fix a countable measurable partition $\left\\{A _{n}\right\\} _{n=1}^{\infty}$, according to the properties of conditional probability mentioned above, except for at most a null set $N$, we have:

\\[
\mathbb{P}\left(\bigcup\limits _{n=1}^{\infty }A _{n}\left\lvert\right. \mathscr{G}\right)(\omega )=\sum\limits _{n=1}^{\infty }\mathbb{P}\left(A _{n}\left\lvert\right. \mathscr{G}\right)(\omega ).
\\]

If $\\omega $ happens to fall within $N$, we can simply choose an arbitrary probability measure $\mathbb{P} _{0}$. Wouldn't this exactly conform to the properties of a measure? However, the problem arises with this countable measurable partition $\left\\{A _{n}\right\\} _{n=1}^{\infty}$. For a general measure, we require countable additivity to hold for *any* countable measurable partition, but the null set $N=N _{\left\\{A _{n}\right\\} _{n=1}^{\infty}}$ chosen above depends on the specific countable measurable partition selected. If we take the union of all such null sets $N _{\left\\{A _{n}\right\\} _{n=1}^{\infty}}$:

\\[
  \tilde{N}:=\bigcup\limits _{\left\\{A _{n}\right\\} _{n=1}^{\infty }}^{}N _{\left\\{A _{n}\right\\} _{n=1}^{\infty }},
\\]

then $\tilde{N}$ could be the union of uncountably many null sets, and thus might not be a null set itself\! Therefore, the $P _{\mathscr{G}}(\cdot ,\cdot )$ defined in this way may not satisfy the properties of a measure. The existence of a regular conditional probability depends on the properties of the space where the image of $f$ lies. In fact, there exist measurable mappings $f$ for which the regular conditional probability given some sub-$\sigma$-algebra $\mathscr{G}$ does not exist. Fortunately, because the properties of the $\sigma$-algebra $(\mathbb{R},\mathcal{B} _{\mathbb{R}})$ are nice enough (it is separable, meaning it has a countable dense subset), the existence of a regular conditional probability is guaranteed when the image of a random variable is the set of real numbers.

Let $f$ be a real-valued random variable on the probability space $(\Omega ,\mathscr{F},\mu )$, and let $\mathscr{G}$ be a sub-$\sigma$-algebra. A bivariate function $F _{f|\mathscr{G}}(\cdot ,\cdot ):(\Omega ,\mathbb{R})\rightarrow \mathbb{R}$ is called the regular conditional distribution function of $f$ given $\mathscr{G}$, if it satisfies:<br>
(1). For each $\omega \in \Omega$, $F _{\mathscr{G}}(\omega ,\cdot )$ is a distribution function.<br>
(2). For each $a \in \mathbb{R}$, $F _{\mathscr{G}}(\cdot ,a)$ is the conditional probability of the event $\left\\{f \le a\right\\}$ given $\mathscr{G}$.

Since $\sigma (f)=f ^{-1}(\mathcal{B} _{\mathbb{R}})\subset \mathscr{F}$, the definition of the regular conditional distribution function actually weakens the definition of regular conditional probability. The following theorem guarantees the existence of a regular conditional distribution function for a real-valued random variable $f$:

<div class="theorem" style="">
  (Existence of the regular conditional distribution function) Let $f$ be a real-valued random variable on the probability space $(\Omega ,\mathscr{F},\mu )$, and let $\mathscr{G}$ be a sub-$\sigma$-algebra. Then the regular conditional distribution function $F _{\mathscr{G}}(\cdot ,\cdot )$ of $f$ given $\mathscr{G}$ exists.
</div>

<div class="proof" style="">
  <p>Let $\mathbb{Q}$ be the set of rational numbers. For any rational number $r \in \mathbb{Q}$, let
\begin{equation*}
    G(\cdot ,r):=\mathbb{P}(\left\{f \le r\right\}\left\lvert\right. \mathscr{G})(\cdot ) a.s.
\end{equation*}
Furthermore, let
\begin{equation*}
    \begin{aligned}
        & N _{1,r}:=\bigcup\limits _{r _{1},r _{2}\in \mathbb{Q}, r _{1}\le r _{2}}^{}\left\{\omega \in \Omega :G(\omega ,r _{1})> G(\omega ,r _{2})\right\},\\ 
        & N _{2,r}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty } G(\omega ,r+\frac{1}{n})\neq G(\omega ,r)\right\},\\
        & N _{3,r}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty }G(\omega ,-n)\neq 0\right\}\cup \left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty }G(\omega ,n)\neq 1\right\},\\ 
        & \tilde{N} _{r}:=\bigcup\limits _{i=1}^{3}N _{i,r},\\ 
        & \tilde{N}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\tilde{N} _{r}.
    \end{aligned}
\end{equation*}
Since $\mathbb{Q}$ is countable, we have $\mathbb{P}(\tilde{N})=0$. Choose an arbitrary distribution function $H(\cdot )$. For $a \in \mathbb{R}$, let
\begin{equation*}
    F _{\mathscr{G}}(\omega ,\left\{f \le a\right\})=\left\{
    \begin{aligned}
        &\inf\limits _{}\left\{G(\omega ,r):r \in \mathbb{Q}, r > a\right\}, \omega \in \Omega \setminus \tilde{N},\\
        &H(a), \omega \in \tilde{N}.
    \end{aligned}
    \right.
\end{equation*}
We now prove that $F _{\mathscr{G}}(\cdot ,\cdot )$ is a regular conditional distribution function of $f$ given $\mathscr{G}$.</p>

<p>It is easy to see that for any $\omega \in \Omega $, $F _{\mathscr{G}}(\omega ,\cdot )$ is a distribution function. The proof is completed.</p>
</div>

By the Carathéodory measure extension theorem (the current situation is a special corollary), any distribution function defined on $\mathbb{R}$ can be uniquely extended to a probability measure on $(\mathbb{R},\mathcal{B} _{\mathbb{R}})$. From this, we can obtain the following existence theorem for regular conditional distributions.

<div class="theorem" style="">
  Let $F _{f|\mathscr{G}}(\cdot ,\cdot )$ be a regular conditional distribution function of the random variable $f$ given the sub-$\sigma$-algebra $\mathscr{G}$. For each $\omega \in \Omega $, let $\mu _{f|\mathscr{G}}(\omega ,\cdot )$ be the unique probability measure extended from $F _{f|\mathscr{G}}(\omega ,\cdot )$. Then the bivariate function
\begin{equation*}
    \mu _{f|\mathscr{G}}=\mu _{f|\mathscr{G}}(\omega ,A):\left(\Omega \times \mathcal{B} _{\mathbb{R}}\right)\rightarrow \mathbb{R}
\end{equation*}
is a regular conditional distribution of $f$ given $\mathscr{G}$, satisfying:<br>

(1). For any $\omega \in \Omega $, $\mu _{f|\mathscr{G}}(\omega ,\cdot )$ is a probability measure on $\mathcal{B} _{\mathbb{R}}$; <br>

(2). For any $A \in \mathcal{B} _{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ is the conditional probability of $\left\{\omega \left\lvert\right. f(\omega )\in A\right\}$ given $\mathscr{G}$, that is, $\displaystyle\int _{G}^{}\mu _{f|\mathscr{G}}(\omega ,A)d \mathbb{P}(\omega )=\mathbb{E}\left[\mathbf{1}_{\left\{f \in A\right\}}\cdot \mathbf{1}_{\left\{G\right\}}\right]$ holds for any $G \in \mathscr{G}$.
</div>

<div class="proof" style="">

<p>For any $A \in \mathcal{B} _{\mathbb{R}}$, define
\begin{equation*}
    \mu _{f \left\lvert\right. \mathscr{G}}(\omega ,A):=\mathbb{P}\left(\left\{f \in A\right\}\left\lvert\right. \mathscr{G}\right)(\omega )
\end{equation*}</p>

<p>By the aforementioned existence theorem of the regular conditional distribution function and the Carathéodory measure extension theorem, we know that (1) holds. Next, we verify that for any $A \in \mathcal{B} _{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ is the conditional probability of the event $\left\{f \in A\right\}$ given $\mathscr{G}$.</p>

<p>First, for any $A=\left(-\infty ,a\right]$, from the previous theorem, we have that $\mu _{f|\mathscr{G}}(\cdot ,A)$ is $\mathscr{G}$-measurable. Let $m _{\mathscr{G}}:=\left\{A:A \in \mathcal{B}_{\mathbb{R}},\mu _{f|\mathscr{G}}(\cdot ,A) \text{ is } \mathscr{G}\text{-measurable}\right\}$, then it can be verified that $m _{\mathscr{G}}$ is a $\lambda$-system containing the $\pi$-system $\left\{(-\infty ,a]:a \in \mathbb{R}\right\}$. By the $\pi$-$\lambda$ theorem, we know $\mathcal{B} _{\mathbb{R}} \subset \mathscr{G}$. That is, for any $A \in \mathcal{B}_{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ is $\mathscr{G}$-measurable.</p>

<p>Secondly, for any fixed $G \in \mathscr{G}$, denote
\begin{equation*}
    c _{G}:=\left\{A:A \in \mathcal{B}_{\mathbb{R}},\displaystyle\int _{G}^{}\mu _{f|\mathscr{G}}(A,\omega )d \mathbb{P}(\omega )=\mathbb{E}\left[\mathbf{1}_{\left\{f \in A\right\}}\cdot \mathbf{1}_{\left\{G\right\}}\right]\right\}.
\end{equation*}
From the definition of $\mu _{f|\mathscr{G}}(\cdot ,\cdot )$ and the monotone convergence theorem for conditional expectations, we know that $c _{G}$ is a $\lambda$-system containing the $\pi$-system $\left\{(-\infty ,a]:a \in \mathbb{R}\right\}$. By the $\pi$-$\lambda$ theorem, we know $\mathcal{B} _{\mathbb{R}} \subset c _{G}$. Due to the arbitrariness of $G$, we conclude that $\mu _{f|\mathscr{G}}(\cdot , A)$ is the conditional probability of $\left\{f \in A\right\}$ given $\mathscr{G}$. This completes the proof.</p>
</div>

<b>Note:</b> The proofs of the existence theorems for the regular conditional distribution function and the regular conditional distribution rely heavily on the properties of real numbers—the countable set of rational numbers is its dense subset. Otherwise, we would not be able to well-define $F _{f\|\mathscr{G}}(\omega ,\left\\{f \le a\right\\})$ from $G(\omega, r)$.

So, what is the use of the existence of a regular conditional distribution (function)? The following theorem illustrates that if the regular conditional distribution (function) of a random variable $X$ exists, then we can compute the conditional expectation of $g(X)$ just like computing a standard expectation, where $g$ is any measurable function.

<div class="theorem" style="">
  Let $F _{X|\mathscr{G}}(\cdot ,\cdot )$ and $\mu _{X|\mathscr{G}}(\cdot ,\cdot )$ be a regular conditional distribution function and a regular conditional distribution of the random variable $X$ given $\mathscr{G}$, respectively. Then for any measurable function $g$, we have:
\begin{equation*}
    \mathbb{E}\left[g(X)|\mathscr{G}\right](\omega )=\displaystyle\int _{\mathbb{R}}^{}g(y)F _{X|\mathscr{G}}(\omega ,dy)=\displaystyle\int _{\mathbb{R}}^{}g(y)d\mu _{X|\mathscr{G}}(\omega ,y), a.s.
\end{equation*}
In particular, when $g(x)=x$, we have:
\begin{equation*}
    \mathbb{E}\left[X|\mathscr{G}\right](\omega )=\displaystyle\int _{\mathbb{R}}^{}yF _{X|\mathscr{G}}(\omega ,dy)=\displaystyle\int _{\mathbb{R}}^{}yd\mu _{X|\mathscr{G}}(\omega ,y), a.s.
\end{equation*}
</div>

<div class="proof" style="">
  <p>When $g=\mathbf{1}_{\left\{(-\infty ,a]\right\}}$, the above equation is simply the definition of the regular conditional distribution function and regular conditional distribution. The above equation is obviously linear with respect to $g$, hence the theorem also holds when $g$ is a non-negative simple function. For a general non-negative measurable function, we can verify the correctness of the above equation by using a monotonically increasing sequence of simple functions and the monotone convergence theorem. For a general measurable function, we can decompose it into its positive and negative parts to verify the correctness of the above equation. This completes the proof.</p>
</div>

# <span style="color: #8E403A;">Martingale</span>

<div class="problem" style="">
Suppose $(X _{n},\mathcal{F}_{n})$ and $(Y _{n},\mathcal{F}_{n})$ are square-integrable martingales.

<p style="margin-left: 1em;">(a). Show that the corresponding mrtingale differences $D _{n}$ are uncorrelated and zero-mean.
</p>

<p style="margin-left: 1em;">(b). Show that for any $l \ge n \ge 0$, we have 
\begin{equation*}
    \begin{aligned}
        \mathbb{E}\left[X _{l}Y _{l}\left\lvert\right. \mathcal{F}_{n}\right]-X _{n}Y _{n}&=\mathbb{E}\left[(X _{l}-X _{n})(Y _{l}-Y _{n})\left\lvert\right. \mathcal{F}_{n}\right]\\ 
        &=\sum\limits _{k=n+1}^{l}\mathbb{E}\left[(X _{k}-X _{k-1})(Y _{k}-Y _{k-1})\left\lvert\right. \mathcal{F}_{n}\right].
    \end{aligned}
\end{equation*}
</p>

<p style="margin-left: 1em;">(c). Using the results in (a) and (b), show that if there exists a constant $C$ such that $\sup\limits _{k}\left|X _{k}\right|\le C$, then for any $l \ge 1$, we have:
\begin{equation*}
    \mathbb{E}\left[\left(\sum\limits _{i=1}^{l}D _{k}^{2}\right)^{2}\right]\le 6C ^{4}.
\end{equation*}
</p>

<b>Note:</b> The result in (c) is non-trivial. The right-hand side of the inequality to be proved is independent of $l$.
</div>

<div class="problem" style="">
  Let $\left(X _{n},\mathscr{F}_{n}\right)$ be a martingale with $\sup\limits _{n}\mathbb{E}\left[\left|X _{n}\right|\right]< \infty $. Show that there exists a representation $X _{n}=Y _{n}-Z _{n}$ with $\left(Y _{n},\mathscr{F}_{n}\right)$ and $\left(Z _{n},\mathscr{F}_{n}\right)$ being non-negative martingales such that $\sup\limits _{n}\mathbb{E}\left[\left|Y _{n}\right|\right]<\infty $ and $\sup\limits _{n}\mathbb{E}\left[\left|Z _{n}\right|\right]<\infty $.

  <p><b>Note:</b> this decomposition is analogous to that any measurable function can be decomposed into its positive and negative parts.</p>
</div>

<div class="problem" style="">
  Suppose $a _{n}\in (0,1]$ are non-random and $Z _{n}$ are independent random variables such that $\mathbb{E}Z _{n}=0, \mathbb{E}\left[\left|Z _{n}\right|\right]=1$ for all $n \ge 1$, while $\mathbb{P}\left(A _{n}\right)\rightarrow 0$ for $A _{n}:=\left\{\omega :Z _{n}(\omega )\neq 0\right\}$. Let 
\begin{equation*}
    Y _{n}=\left|Z _{n}\right|Y _{n-1}+a _{n}Z _{n}\mathbf{1}_{\left\{Y _{n-1}=0\right\}}, \forall n \ge 1, Y _{0}=0.
\end{equation*}
<p style="margin-left: 1em;">(a). Show that $\left\{Y _{n}\right\}$ is a martingale and that for any $x>0$ and $n \ge 1$, 
\begin{equation*}
    \mathbb{P}\left(\max\limits _{k=1}^{n} Y _{k}\ge x\right)\le \frac{1}{2x}\left[a _{1}+\sum\limits _{k=2}^{n}a _{k}\left(1-\mathbb{P}(A _{k-1})\right)\right].
\end{equation*}</p>

<p style="margin-left: 1em;"><b>Note:</b> Note that the denominator on the right-hand side of the inequality is $2x$ instead of $x$.</p>

<p style="margin-left: 1em;">(b). Show that $Y _{n}\overset{p}{\rightarrow }0$ as $n\to\infty$, but $\left\{Y _{n}\right\}$ does not converge in $L _{1}$ to $0$.</p>

<p style="margin-left: 1em;">(c). Show that $Y _{n}\overset{a.s.}{\rightarrow }0$ if and only if $\sum\limits _{k=1}^{\infty }\mathbb{P}(A _{k})<\infty $. </p>

<p style="margin-left: 1em;">(d). Show that $\left\{Y _{n}\right\}$ is $L _{1}$-bounded if and only if $\sum\limits _{k=1}^{\infty }a _{k}<\infty $.</p>

<p style="margin-left: 1em;">(e). Suppose that in addition $\left|Z _{k}\right|\ge \frac{1}{a _{k}}$ on $A _{k}$ for all $k \ge 1$. Using the Vitali convergence theorem, what can you deduce?</p>
</div>

<div class="theorem" style="">
    (Doob's maximal inequality). For any sub-martingale $\left\{X _{n}\right\}$ and $x>0$, let $\tau _{x}=\inf\limits _{k}\left\{k \ge 0:X _{k}\ge x\right\}$. Then for any finite $n \ge 0$, we have 
\begin{equation*}
    \mathbb{P}\left(\max\limits _{k=0}^{n}X _{k}\ge x\right)\le \frac{1}{x}\mathbb{E}\left[X _{n}\mathbf{1}_{\left\{\tau _{x}\le n\right\}}\right]\le \frac{1}{x}\mathbb{E}[X _{n}^{+}].
\end{equation*}
<b>Note:</b> Doob's maximal inequality significantly generalizes Markov's inequality. Setting $n=1$ and $X _{0}\ge 0$ recovers Markov's inequality. 
</div>

<div class="proof" style="">
  <p>Let the event $A=\left\{\max\limits _{0 \le k \le n}X _{k}\ge x\right\}$. We can partition $A$ into a union of disjoint events. Specifically, let $\tau _{x}$ be the first time the sequence exceeds or equals $x$, then $A$ can be represented as:
\begin{equation*}
    A=\bigcup\limits _{k=0}^{n}\left\{\tau _{x}=k\right\}:=\bigcup\limits _{k=0}^{n}A _{k},
\end{equation*}
where $A _{k}=\left\{X _{0}< x,\dots ,X _{k-1}< x,X _{k}\ge x\right\}$. Since $\left\{X _{n}\right\}$ is adapted to its corresponding filtration $\mathscr{F}_{n}$, it is easy to see that $A _{k}\in \mathscr{F}_{k}$.</p>

  <p>On the event $A _{k}$, we clearly know that $X _{k}\ge x$, hence:
\begin{equation*}
    x \mathbb{P}(A _{k})=\mathbb{E}[x \mathbf{1}_{A _{k}}]\le \mathbb{E}[X _{k}\mathbf{1}_{A _{k}}].
\end{equation*}
Moreover, since $\left\{X _{n}\right\}$ is a sub-martingale and $A _{k}\in \mathscr{F}_{k}$, according to the property of sub-martingales we have $\mathbb{E}[X _{n}\mid \mathscr{F}_{k}]\ge X _{k}$, so by taking the expectation on $A _{k}$ we obtain:
\begin{equation*}
    \mathbb{E}[X _{k}\mathbf{1}_{A _{k}}]\le \mathbb{E}[\mathbb{E}[X _{n}\mid \mathscr{F}_{k}]\mathbf{1}_{A _{k}}]=\mathbb{E}[X _{n}\mathbf{1}_{A _{k}}].
\end{equation*}
Combining the two inequalities above, we get $x \mathbb{P}(A _{k})\le \mathbb{E}[X _{n}\mathbf{1}_{A _{k}}]$.</p>

  <p>Next, summing over $k$ from $0$ to $n$. Since the events $A _{k}$ are mutually disjoint and $\bigcup\limits_{k=0}^{n} A _{k} = \left\{\tau _{x} \le n\right\}$, we have:
\begin{equation*}
    x \mathbb{P}(A)=\sum\limits _{k=0}^{n}x \mathbb{P}(A _{k})\le \sum\limits _{k=0}^{n}\mathbb{E}[X _{n}\mathbf{1}_{A _{k}}]=\mathbb{E}\left[X _{n}\sum\limits _{k=0}^{n}\mathbf{1}_{A _{k}}\right]=\mathbb{E}\left[X _{n}\mathbf{1}_{\left\{\tau _{x}\le n\right\}}\right].
\end{equation*}
Dividing both sides by $x$, this proves the first inequality $\mathbb{P}\left(\max\limits _{k=0}^{n}X _{k}\ge x\right)\le \frac{1}{x}\mathbb{E}\left[X _{n}\mathbf{1}_{\left\{\tau _{x}\le n\right\}}\right]$.</p>

  <p>For the second inequality, we utilize the conclusion above and the easy inequality that $X _{n}\mathbf{1} _{\left\{\tau _{x}\le n\right\}}\le X _{n}^{+}$.</p>
</div>

<div class="problem" style="">
Suppose that $\left\{X _{n}\right\}$ is a non-negative sup-MG with canonical filtration.<br>

<p style="margin-left: 1em;">(a). Show that if $\tau $ is a stopping time then $\mathbb{E}X _{0}\ge \mathbb{E}X _{n \wedge \tau }\ge \mathbb{E}\left[X _{\tau }\mathbf{1}_{\left\{\tau \le n\right\}}\right]$.</p>

<p style="margin-left: 1em;">(b). Deduce that if $\left\{X _{n}\right\}$ is a non-negative sup-MG then for any $x>0$, we have 
\begin{equation*}
    \mathbb{P}\left(\sup\limits _{k}X _{k}\ge x\right)\le \frac{1}{x}\mathbb{E}X _{0}.
\end{equation*}</p>

<p style="margin-left: 1em;">(c). Suppose $S _{n}=\sum\limits _{i=1}^{n}\xi _{i}$ is a random walk with $\mathbb{E}\xi _{1}=-\mu $ and $\text{Var}\left(\xi _{1}\right)=\sigma ^{2}>0$. Let $\alpha :=\frac{\mu }{\sigma ^{2}+\mu ^{2}}$ and $f(x)=\frac{1}{1+\alpha (z-x)_{+}}$.</p>

<p style="margin-left: 2em;">(i). Let $v(x)=\alpha f(x)^{2}\mathbf{1}_{\left\{x<z\right\}}$. Show that $g _{x}(y):=f(x)+v(x)[(y-x)+\alpha (y-x)^{2}]\ge f(y)$ for all $x,y \in \mathbb{R}$.</p>

<p style="margin-left: 2em;">(ii). Show that $f(S _{n})=\mathbb{E}\left[g _{S _{n}}(S _{n+1})|S _{k},k \le n\right]$.</p>

<p style="margin-left: 2em;">(iii). Use the results in (b) to deduce that for any $z>0$,
\begin{equation*}
    \mathbb{P}\left(\sup\limits _{k}S _{k}\ge z\right)\le \frac{1}{1+\alpha z}.
\end{equation*}</p>
</div>

<button id="back-to-top" title="Back to top">↑</button>