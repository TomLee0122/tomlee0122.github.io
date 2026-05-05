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
# categories:
#   - Academic
# tags:
#   - Probability
layout: single
mathjax: true
author_profile: true
authors:
  - yikun
related: false
read_time: false
last_modified_at: 2026-04-23
toc: true
permalink: /academic-tags/ce_martingale
---

<b><a href="/academic-tags/ce_martingale_EN" class="custom-link-3">English version</a> of the blog.</b>

# <span style="color: #8E403A;">前言</span>

这篇 blog 记录了一些有关条件期望与鞅的重要结果与练习。这篇 blog 只是一个笔记性质的集合，并没有提供非常系统的有关测度论、条件期望和鞅的介绍。blog 内容主要来自于之前我读过的一些教材以及在 Northwestern 的课程 STAT 430-2 的讲义。blog 中的内容的难度大致是 PhD 级别的测度论、概率论或者随机过程课程的水平。<b>目前，这篇 blog 还在建设当中。如果你对于 blog 的内容有任何建议或者想要贡献，欢迎随时联系我！</b>

# <span style="color: #8E403A;">条件期望</span>

## 正则条件概率

基于条件期望的定义，我们可以很自然地定义条件概率。对于任意测度空间 $\left(\Omega ,\mathscr{F},\mu \right)$ 与 $\mathscr{F}$ 的一个子 $\sigma$-代数 $\mathscr{G}$ 以及 $\mathscr{F}$ 中的集合 $A$, 定义 $A$ 关于 $\mathscr{G}$ 的条件概率为：
\\[
  \mathbb{P}\left(A\left\lvert\right. \mathscr{G}\right):=\mathbb{E}\left[\mathbf{1}_{A}\left\lvert\right. \mathscr{G}\right].
\\]
根据条件期望的单调性与线性，我们有：<br>
(1). 对于任意 $A,B \in \mathscr{F},A \subset B$:
\\[
  0=\mathbb{P}\left(\varnothing \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(A \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(B \left\lvert\right. \mathscr{G}\right)\le \mathbb{P}\left(\Omega \left\lvert\right. \mathscr{G}\right)=1, a.s.
\\]<br>
(2). 对于 $\left(\Omega ,\mathscr{F}\right)$ 的任意一个可列可测分割 $\left\\{A _{n}\right\\} _{n=1}^{\infty}$, 有：
\\[
  \mathbb{P}\left(\bigcup\limits _{n=1}^{\infty }A _{n}\left\lvert\right. \mathscr{G}\right)=\sum\limits _{n=1}^{\infty }\mathbb{P}\left(A _{n}\left\lvert\right. \mathscr{G}\right), a.s.
\\]
我们发现，虽然条件概率是一个随机变量（因为条件期望是一个随机变量），但是除了带有 "a.s." 等价类的限制，它的性质似乎与一般的概率测度非常相似。这让我们想到：会不会对一般的测度空间 $\left(\Omega ,\mathscr{F}\right)$ 的任意一个子 $\sigma$-代数 $\mathscr{G}$, 我们都能定义出这样一个二元函数 $P _{\mathscr{G}}(\cdot ,\cdot ):\left(\Omega \times \mathscr{F}\right)\rightarrow \mathbb{R}$, 使得：<br>
(1). 对于 $\mathscr{F}$ 中的任意集合 $A$, $P _{\mathscr{G}}(\cdot ,A)$ 是 $A$ 有关 $\mathscr{G}$ 的条件概率。<br>
(2). 对于 $\Omega$ 中的任意 $\omega$, $P _{\mathscr{G}}(\omega ,\cdot )$ 是 $\left(\Omega ,\mathscr{F}\right)$ 上的一个概率测度。

如果能这样定义出二元函数 $P _{\mathscr{G}}(\cdot ,\cdot )$, 那么我们就可以把条件概率看成是一个随机测度了，并且如果我们想计算 $g(f)$ 的条件期望 $\mathbb{E}\left[g(f)\left\lvert\right. \mathscr{G}\right]$, 我们可以像计算一般的期望一样直接对 $f$ 关于 $\mathscr{G}$ 的正则条件概率进行积分。

很自然地，我们想到，直接定义 $P _{\mathscr{G}}(\omega ,A):=\mathbb{P}\left(A\left\lvert\right. \mathscr{G}\right)(\omega )$ 是不是就可以了呢？对于条件 (1), 这个定义天然地满足要求。对于条件 (2), 如果我们固定一个可列可测分割 $\left\\{A _{n}\right\\} _{n=1}^{\infty}$, 根据上述条件概率的性质，在除去至多一个零测集 $N$ 以外，我们都有
\\[
\mathbb{P}\left(\bigcup\limits _{n=1}^{\infty }A _{n}\left\lvert\right. \mathscr{G}\right)(\omega )=\sum\limits _{n=1}^{\infty }\mathbb{P}\left(A _{n}\left\lvert\right. \mathscr{G}\right)(\omega ).
\\]
如果 $\omega $ 正好落在了 $N$ 内，我们就随便选取一个概率测度 $\mathbb{P} _{0}$. 这不是也正好符合测度的性质吗？然而，问题出现在这个可列可测分割 $\left\\{A _{n}\right\\} _{n=1}^{\infty}$ 上。对于一般的测度，我们要求可列可加性对于任意的可列可测分割都成立，但是上述选取的零测集 $N=N _{\left\\{A _{n}\right\\} _{n=1}^{\infty}}$ 依赖于所选的可列可测分割。如果我们将所有这样的零测集 $N _{\left\\{A _{n}\right\\} _{n=1}^{\infty}}$ 取并集：
\\[
  \tilde{N}:=\bigcup\limits _{\left\\{A _{n}\right\\} _{n=1}^{\infty }}^{}N _{\left\\{A _{n}\right\\} _{n=1}^{\infty }},
\\]
则 $\tilde{N}$ 可能是不可数多个零测集的并集，从而不一定是零测集！因此，由此定义出的 $P _{\mathscr{G}}(\cdot ,\cdot )$ 可能不满足测度的性质。正则条件概率的存在性依赖于 $f$ 的像所在空间的性质。事实上，是存在可测映射 $f$, 使得其对应的某个子 $\sigma$-代数 $\mathscr{G}$ 的正则条件概率是不存在的。幸运的是，由于 $\sigma$-代数 $(\mathbb{R},\mathcal{B} _{\mathbb{R}})$ 的性质足够好（是可分的，即有可数稠密子集），当一个随机变量的像是实数时，正则条件概率的存在性得到了保证。

设 $f$ 是概率空间 $(\Omega ,\mathscr{F},\mu )$ 上的实值随机变量，$\mathscr{G}$ 是一个子 $\sigma$-代数。称二元函数 $F _{f|\mathscr{G}}(\cdot ,\cdot ):(\Omega ,\mathbb{R})\rightarrow \mathbb{R}$ 为 $f$ 关于 $\mathscr{G}$ 的正则条件分布函数，如果它满足：<br>
(1). 对每个 $\omega \in \Omega$, $F _{\mathscr{G}}(\omega ,\cdot )$ 是一个分布函数。<br>
(2). 对每个 $a \in \mathbb{R}$, $F _{\mathscr{G}}(\cdot ,a)$ 是事件 $\left\\{f \le a\right\\}$ 关于 $\mathscr{G}$ 的条件概率。

由于 $\sigma (f)=f ^{-1}(\mathcal{B} _{\mathbb{R}})\subset \mathscr{F}$, 正则条件分布函数的定义其实弱化了正则条件概率的定义。下面的定理保证了对于实值随机变量 $f$ 的正则条件分布函数的存在性：

<div class="theorem" style="">
  （正则条件分布函数的存在性） 设 $f$ 是概率空间 $(\Omega ,\mathscr{F},\mu )$ 上的实值随机变量，$\mathscr{G}$ 是一个子 $\sigma$-代数。则 $f$ 关于 $\mathscr{G}$ 的正则条件分布函数 $F _{\mathscr{G}}(\cdot ,\cdot )$ 存在。
</div>

<div class="proof" style="">
  <p>设 $\mathbb{Q}$ 是有理数集，$r \in \mathbb{Q}$ 是任何一个有理数，令
\begin{equation*}
    G(\cdot ,r):=\mathbb{P}(\left\{f \le r\right\}\left\lvert\right. \mathscr{G})(\cdot ) a.s.
\end{equation*}
再令
\begin{equation*}
    \begin{aligned}
        & N _{1,r}:=\bigcup\limits _{r _{1},r _{2}\in \mathbb{Q}, r _{1}\le r _{2}}^{}\left\{\omega \in \Omega :G(\omega ,r _{1})> G(\omega ,r _{2})\right\},\\ 
        & N _{2,r}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty } G(\omega ,r+\frac{1}{n})\neq G(\omega ,r)\right\},\\
        & N _{3,r}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty }G(\omega ,-n)\neq 0\right\}\cup \left\{\omega \in \Omega :\lim\limits _{n\rightarrow \infty }G(\omega ,n)\neq 1\right\},\\ 
        & \tilde{N} _{r}:=\bigcup\limits _{i=1}^{3}N _{i,r},\\ 
        & \tilde{N}:=\bigcup\limits _{r \in \mathbb{Q}}^{}\tilde{N} _{r}.
    \end{aligned}
\end{equation*}
由于 $\mathbb{Q}$ 是可数的，有 $\mathbb{P}(\tilde{N})=0$. 取任意一个分布函数 $H(\cdot )$, 对于 $a \in \mathbb{R}$, 令
\begin{equation*}
    F _{\mathscr{G}}(\omega ,\left\{f \le a\right\})=\left\{
    \begin{aligned}
        &\inf\limits _{}\left\{G(\omega ,r):r \in \mathbb{Q}, r > a\right\}, \omega \in \Omega \setminus \tilde{N},\\
        &H(a), \omega \in \tilde{N}.
    \end{aligned}
    \right.
\end{equation*}
容易验证，上述定义出的 $F _{f|\mathscr{G}}(\cdot ,\cdot )$ 是一个正则条件分布函数。</p>
</div>

由 Caratheodory 测度扩张定理可知（当前情况是一个特殊的推论），任何定义在 $\mathbb{R}$ 上的分布函数都可以唯一扩张为 $(\mathbb{R},\mathcal{B} _{\mathbb{R}})$ 上的一个概率测度。由此，我们可以得到下述有关正则条件分布的存在性定理。

<div class="theorem" style="">
  设 $F _{f|\mathscr{G}}(\cdot ,\cdot )$ 是随机变量 $f$ 关于子 $\sigma$-代数 $\mathscr{G}$ 的一个正则条件分布函数。对每个 $\omega \in \Omega $, 记 $\mu _{f|\mathscr{G}}(x,\cdot )$ 为 $F _{f|\mathscr{G}}(\omega ,\cdot )$ 唯一扩张的概率测度。则二元函数
\begin{equation*}
    \mu _{f|\mathscr{G}}=\mu _{f|\mathscr{G}}(\omega ,A):\left(\Omega \times \mathcal{B} _{\mathbb{R}}\right)\rightarrow \mathbb{R}
\end{equation*}
是 $f$ 关于 $\mathscr{G}$ 的一个正则条件分布，满足：<br>

(1). 对于任意的 $\omega \in \Omega $, $\mu _{f|\mathscr{G}}(\omega ,\cdot )$ 是 $\mathcal{B} _{\mathbb{R}}$ 上的一个概率测度；<br>

(2). 对于任意的 $A \in \mathcal{B} _{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ 是 $\left\{\omega \left\lvert\right. f(\omega )\in A\right\}$ 关于 $\mathscr{G}$ 的条件概率，即有 $\displaystyle\int _{G}^{}\mu _{f|\mathscr{G}}(\omega ,A)d \mathbb{P}(\omega )=\mathbb{E}\left[\mathbf{1}_{\left\{f \in A\right\}}\cdot \mathbf{1}_{\left\{G\right\}}\right]$ 对任意的 $G \in \mathscr{G}$ 成立。
</div>

<div class="proof" style="">

<p>对于任意 $A \in \mathcal{B} _{\mathbb{R}}$, 定义
\begin{equation*}
    \mu _{f \left\lvert\right. \mathscr{G}}(\omega ,A):=\mathbb{P}\left(\left\{f \in A\right\}\left\lvert\right. \mathscr{G}\right)(\omega )
\end{equation*}</p>

<p>由上述正则条件分布函数的存在性定理与 Caratheodory 测度扩张定理，我们知 (1) 成立。下面验证对于任意的 $A \in \mathcal{B} _{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ 是事件 $\left\{f \in A\right\}$ 关于 $\mathscr{G}$ 的条件概率。</p>

<p>首先，对于任意的 $A=\left(-\infty ,a\right]$, 由上一个定理，我们有 $\mu _{f|\mathscr{G}}(\cdot ,A)$ 关于 $\mathscr{G}$ 是可测的。记 $m _{\mathscr{G}}:=\left\{A:A \in \mathcal{B}_{\mathbb{R}},\mu _{f|\mathscr{G}}(\cdot ,A) \text{ 是 } \mathscr{G} \text{ 可测的}\right\}$, 则可以验证 $m _{\mathscr{G}}$ 是一个包含了 $\pi $-系 $\left\{(-\infty ,a]:a \in \mathbb{R}\right\}$ 的 $\lambda$-系, 由 $\pi$-$\lambda$ 定理可知 $\mathcal{B} _{\mathbb{R}} \subset \mathscr{G}$. 即对于任意 $A \in \mathcal{B}_{\mathbb{R}}$, $\mu _{f|\mathscr{G}}(\cdot ,A)$ 是 $\mathscr{G}$ 可测的。</p>

<p>其次，对于任意固定的 $G \in \mathscr{G}$, 记
\begin{equation*}
    c _{G}:=\left\{A:A \in \mathcal{B}_{\mathbb{R}},\displaystyle\int _{G}^{}\mu _{f|\mathscr{G}}(A,\omega )d \mathbb{P}(\omega )=\mathbb{E}\left[\mathbf{1}_{\left\{f \in A\right\}}\cdot \mathbf{1}_{\left\{G\right\}}\right]\right\}.
\end{equation*}
由 $\mu _{f|\mathscr{G}}(\cdot ,\cdot )$ 的定义与条件期望的单调收敛定理知道 $c _{G}$ 是一个包含了 $\pi $-系 $\left\{(-\infty ,a]:a \in \mathbb{R}\right\}$ 的 $\lambda$-系, 由 $\pi$-$\lambda$ 定理可知 $\mathcal{B} _{\mathbb{R}} \subset c _{G}$. 由 $G$ 的任意性，我们知 $\mu _{f|\mathscr{G}}(\cdot , A)$ 是 $\left\{f \in A\right\}$ 关于 $\mathscr{G}$ 的条件概率。证毕。</p>
</div>

<b>注：</b>上述正则条件分布函数与正则条件分布的存在性定理的证明非常依赖于实数的性质——可数的有理数集是其稠密子集。否则，我们就无法从 $G(\omega, r)$ 良定义出 $F _{f\|\mathscr{G}}(\omega ,\left\\{f \le a\right\\})$ 了。

那么，正则条件分布（函数）的存在性有什么用呢？下面的定理说明，如果一个随机变量 $X$ 的正则条件分布（函数）存在，那么我们就可以像计算一般的期望一样计算 $g(X)$ 的条件期望了，其中 $g$ 是任意一个可测函数。

<div class="theorem" style="">
  设随机变量 $X$ 关于 $\mathscr{G}$ 的一个正则条件分布函数与正则条件分布为 $F _{X|\mathscr{G}}(\cdot ,\cdot )$ $\mu _{X|\mathscr{G}}(\cdot ,\cdot )$, 则对于任意的可测函数 $g$, 我们有：
\begin{equation*}
    \mathbb{E}\left[g(X)|\mathscr{G}\right](\omega )=\displaystyle\int _{\mathbb{R}}^{}g(y)F _{X|\mathscr{G}}(\omega ,dy)=\displaystyle\int _{\mathbb{R}}^{}g(y)d\mu _{X|\mathscr{G}}(\omega ,y), a.s.
\end{equation*}
特别的，当 $g(x)=x$ 时，我们有：
\begin{equation*}
    \mathbb{E}\left[X|\mathscr{G}\right](\omega )=\displaystyle\int _{\mathbb{R}}^{}yF _{X|\mathscr{G}}(\omega ,dy)=\displaystyle\int _{\mathbb{R}}^{}yd\mu _{X|\mathscr{G}}(\omega ,y), a.s.
\end{equation*}
</div>

<div class="proof" style="">
  <p>当 $g=\mathbf{1}_{\left\{(-\infty ,a]\right\}}$ 时，上述等式就是正则条件分布函数与正则条件分布的定义。上述等式显然对于 $g$ 是线性的，因此当 $g$ 是非负简单函数时，定理也成立。对于一般的非负可测函数，我们可以通过使用单调递增的简单函数列与单调收敛定理来验证上述等式的正确性。对于一般的可测函数，我们可以将其分解为正负两部分来验证上述等式的正确性。证毕。</p>
</div>

# <span style="color: #8E403A;">鞅</span>

<div class="problem" style="">
设 $(X _{n},\mathcal{F}_{n})$ 和 $(Y _{n},\mathcal{F}_{n})$ 是两个平方可积的鞅。

<p style="margin-left: 1em;">(a). 证明 $X _{n}$ 的鞅差 $D _{n},n=1,2,\dots$ 是零均值且互不相关的。
</p>

<p style="margin-left: 1em;">(b). 证明对于任意的 $l \ge n \ge 0$, 我们有:
\begin{equation*}
    \begin{aligned}
        \mathbb{E}\left[X _{l}Y _{l}\left\lvert\right. \mathcal{F}_{n}\right]-X _{n}Y _{n}&=\mathbb{E}\left[(X _{l}-X _{n})(Y _{l}-Y _{n})\left\lvert\right. \mathcal{F}_{n}\right]\\ 
        &=\sum\limits _{k=n+1}^{l}\mathbb{E}\left[(X _{k}-X _{k-1})(Y _{k}-Y _{k-1})\left\lvert\right. \mathcal{F}_{n}\right].
    \end{aligned}
\end{equation*}
</p>

<p style="margin-left: 1em;">(c). 利用 (a) 与 (b) 的结果证明如果存在常数 $C$ 使得 $\sup\limits _{k}\left|X _{k}\right|\le C$, 那么对于任意 $l \ge 1$, 我们有:
\begin{equation*}
    \mathbb{E}\left[\left(\sum\limits _{i=1}^{l}D _{k}^{2}\right)^{2}\right]\le 6C ^{4}.
\end{equation*}
</p>

<p style="margin-left: 1em;"><b>注：</b>(c) 中的结果是 non-trivial 的。欲证明的不等式的右边与 $l$ 无关。
</p>

</div>

<div class="problem" style="">
  设 $\left(X _{n},\mathscr{F}_{n}\right)$ 是一个鞅，且满足 $\sup\limits _{n}\mathbb{E}\left[\left|X _{n}\right|\right]< \infty $。证明存在表示 $X _{n}=Y _{n}-Z _{n}$，其中 $\left(Y _{n},\mathscr{F}_{n}\right)$ 和 $\left(Z _{n},\mathscr{F}_{n}\right)$ 均为非负鞅，且满足 $\sup\limits _{n}\mathbb{E}\left[\left|Y _{n}\right|\right]<\infty $ 和 $\sup\limits _{n}\mathbb{E}\left[\left|Z _{n}\right|\right]<\infty $。

  <p><b>注：</b> 这种分解类似于任何可测函数都可以分解为其正部和负部。</p>

</div>

<div class="problem" style="">
  假设 $a_{n}\in (0,1]$ 是非随机的，且 $Z_{n}$ 是独立的随机变量，满足对于所有 $n \ge 1$ 有 $\mathbb{E}Z_{n}=0, \mathbb{E}\left[\left|Z_{n}\right|\right]=1$，同时对于 $A_{n}:=\left\{\omega :Z_{n}(\omega )\neq 0\right\}$ 有 $\mathbb{P}\left(A_{n}\right)\rightarrow 0$。令
\begin{equation*}
    Y_{n}=\left|Z_{n}\right|Y_{n-1}+a_{n}Z_{n}\mathbf{1}_{\left\{Y_{n-1}=0\right\}}, \forall n \ge 1, Y_{0}=0.
\end{equation*}
<p style="margin-left: 1em;">(a). 证明 $\left\{Y_{n}\right\}$ 是一个鞅，并且对于任意 $x\ge 0$ 和 $n \ge 1$，
\begin{equation*}
    \mathbb{P}\left(\max\limits_{k=1}^{n} Y_{k}\ge x\right)\le \frac{1}{2x}\left[a_{1}+\sum\limits_{k=2}^{n}a_{k}\left(1-\mathbb{P}(A_{k-1})\right)\right].
\end{equation*}</p>

<p style="margin-left: 1em;"><b>注：</b>注意这里不等式右边的分母是 $2x$ 而不是 $x$。</p>

<p style="margin-left: 1em;">(b). 证明当 $n\to\infty$ 时，$Y_{n}\overset{p}{\rightarrow }0$，但是 $\left\{Y_{n}\right\}$ 在 $L_{1}$ 中并不收敛于 $0$。</p>

<p style="margin-left: 1em;">(c). 证明 $Y_{n}\overset{a.s.}{\rightarrow }0$ 当且仅当 $\sum\limits_{k=1}^{\infty }\mathbb{P}(A_{k})<\infty $。 </p>

<p style="margin-left: 1em;">(d). 证明 $\left\{Y_{n}\right\}$ 是 $L_{1}$ 有界的当且仅当 $\sum\limits_{k=1}^{\infty }a_{k}<\infty $。</p>

<p style="margin-left: 1em;">(e). 假设此外对于所有 $k \ge 1$，在 $A_{k}$ 上有 $\left|Z_{k}\right|\ge \frac{1}{a_{k}}$。使用维塔利（Vitali）收敛定理，你能推导出什么？</p>
</div>

<div class="problem" style="">
  假设 $\left\{X _{n}\right\}$ 是一个具有自然滤波的非负上鞅（sup-MG）。<br>

  <p style="margin-left: 1em;">(a). 证明如果 $\tau $ 是一个停时，那么 $\mathbb{E}X _{0}\ge \mathbb{E}X _{n \wedge \tau }\ge \mathbb{E}\left[X _{\tau }\mathbf{1}_{\left\{\tau \le n\right\}}\right]$。</p>

  <p style="margin-left: 1em;">(b). 推导出如果 $\left\{X _{n}\right\}$ 是一个非负上鞅，那么对于任意的 $x>0$，我们有 
\begin{equation*}
    \mathbb{P}\left(\sup\limits _{k}X _{k}\ge x\right)\le \frac{1}{x}\mathbb{E}X _{0}.
\end{equation*}</p>

  <p style="margin-left: 1em;">(c). 假设 $S _{n}=\sum\limits _{i=1}^{n}\xi _{i}$ 是一个随机游走，满足 $\mathbb{E}\xi _{1}=-\mu $ 且 $\text{Var}\left(\xi _{1}\right)=\sigma ^{2}>0$。令 $\alpha :=\frac{\mu }{\sigma ^{2}+\mu ^{2}}$ 并且 $f(x)=\frac{1}{1+\alpha (z-x)_{+}}$。</p>

  <p style="margin-left: 2em;">(i). 令 $v(x)=\alpha f(x)^{2}\mathbf{1}_{\left\{x<z\right\}}$。证明对于所有的 $x,y \in \mathbb{R}$，都有 $g _{x}(y):=f(x)+v(x)[(y-x)+\alpha (y-x)^{2}]\ge f(y)$。</p>

  <p style="margin-left: 2em;">(ii). 证明 $f(S _{n})=\mathbb{E}\left[g _{S _{n}}(S _{n+1})|S _{k},k \le n\right]$。</p>

  <p style="margin-left: 2em;">(iii). 利用 (b) 中的结果推导出，对于任意的 $z>0$，有
\begin{equation*}
    \mathbb{P}\left(\sup\limits _{k}S _{k}\ge z\right)\le \frac{1}{1+\alpha z}.
\end{equation*}</p>
</div>

<button id="back-to-top" title="Back to top">↑</button>