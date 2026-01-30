---
title: Robust Signal Detection with Quadratically Convex Orthosymmetric Constraints
excerpt: |
  <div>
  <span style="font-size:0.9em;color: #808080">With Matey Neykov</span>
  </div>
  
  <div class="excerpt-image-container" style="max-width: 60%; position: relative;">
    
    <img src='/assets/images/Research/robust_minimax_testing_i/excerpt.png' 
         alt='Research excerpt light' 
         class="img-light" 
         style='width: 100%; height: auto; display: block;'>
    
    <img src='/assets/images/Research/robust_minimax_testing_i/excerpt_black_mode.png' 
         alt='Research excerpt dark' 
         class="img-dark" 
         style='width: 100%; height: auto; position: absolute; top: 0; left: 0;'>
         
  </div>
  <hr style="width: 100%; height: 2px; background-color:#b8b8b8; border: none;">
categories:
  - Research
tags:
  - Minimax
layout: single
classes: wide
mathjax: true
author_profile: true
authors:
  - yikun
related: false
read_time: false
last_modified_at: 2026-01-28
toc: false
permalink: /research-tags/robust-minimax-testing-i
---

# <span style="color: #8E403A;">Authors</span>

<b><a href="https://tomlee0122.github.io/" class="custom-link-3">Yikun Li</a></b><br> 
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:YikunLi2028@u.northwestern.edu" class="custom-link-3">YikunLi2028@u.northwestern.edu</a>

<b><a href="https://mateyneykov.com/" class="custom-link-3">Matey Neykov</a></b><br>
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:mneykov@northwestern.edu" class="custom-link-3">mneykov@northwestern.edu</a>

# <span style="color: #8E403A;">Abstract</span>

This work is concerned with robust signal detection in Gaussian noise under quadratically convex orthosymmetric (QCO) constraints. Specifically, the null hypothesis $H _{0}$ assumes no signal, whereas the alternative $H _{1}$ considers signal that is separated in Euclidean norm from zero and belongs to a set $K$ satisfying the QCO constraints. In addition, an adversary is allowed to inspect all the $N$ samples and replace up to $\epsilon N$ of them with arbitrary values, where $0 < \epsilon < c_0 < \frac{1}{2}$ is the corruption rate. Our main results establish the minimax rate of the separation radius $\rho _{\text{critical}}$ between $H _{0}$ and $H _{1}$ purely in terms of the geometry of $K$, the corruption rate $\epsilon$ (up to logarithmic factors in $\frac{1}{\epsilon }$) and the scale of the noise $\sigma $. We argue that the Kolmogorov widths of the constraint play a central role in determining the minimax rate. This indicates similarity with the (uncorrupted) estimation problem under QCO constraints, which was first established by <a href="https://www.jstor.org/stable/2242061" class="custom-link-3">Donoho et al. (1990)</a>. Moreover, the minimax lower bound reveals interesting phase transitions of the testing problem regarding $\epsilon $. Consistent with classic belief about testing and estimation, the testing problem is ``easier'' (even when one compares the results with recent papers studying the constrained robust estimation problem (<a href="https://arxiv.org/abs/2412.03832" class="custom-link-3">Prasadan and Neykov (2025)</a>)). In addition to the main results above, where the upper bound is achieved with an intractable algorithm, inspired by <a href="https://www.computer.org/csdl/proceedings-article/focs/2023/189400c159/1T977q9TOdW" class="custom-link-3">Canonne et al. (2023)</a>, we develop a polynomial time algorithm which also nearly (up to logarithmic factors in $N$ and $1/\epsilon$) achieves the minimax lower bound. In contrast to <a href="https://www.computer.org/csdl/proceedings-article/focs/2023/189400c159/1T977q9TOdW" class="custom-link-3">Canonne et al. (2023)</a>, our algorithm works for signals of arbitrary Euclidean length, and respects the QCO constraint. Finally, all the results above are naturally extended to the $\ell _{p}$ norm testing problem for $1 \le p<2$.

<div style="text-align: center;">
  
  <div class="blog-image-wrapper" style="max-width: 75%;">
    
    <a href="/assets/images/Research/robust_minimax_testing_i/excerpt.png" 
       class="link-light">
      <img src="/assets/images/Research/robust_minimax_testing_i/excerpt.png" 
           alt="Main concepts light">
    </a>

    <a href="/assets/images/Research/robust_minimax_testing_i/excerpt_black_mode.png" 
       class="link-dark">
      <img src="/assets/images/Research/robust_minimax_testing_i/excerpt_black_mode.png" 
           alt="Main concepts dark">
    </a>
    
  </div>

  <figcaption style="margin-top: 1em; margin-bottom: 1.3em;">
    The image illustrating the main concepts of the work.
  </figcaption>
</div>

# <span style="color: #8E403A;">Availability</span>

The preprint of this work is available at <a href="https://arxiv.org/abs/2308.13036" class="custom-link-3">https://arxiv.org/abs/2308.13036</a>.