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

This paper studies the problem of robust signal detection in Gaussian noise under quadratically convex orthosymmetric (QCO) constraints. We consider a minimax testing framework where the signal belongs to a QCO set and is separated from zero in Euclidean norm, while an adversary is allowed to arbitrarily corrupt a fraction $\epsilon $ of the samples. We establish the minimax separation radius between the null and alternative purely in terms of the constraint geometry, sample size, corruption rate, and noise scale. Our analysis argues that the Kolmogorov widths of the constraint set play a central role in determining the detection limits, paralleling to classic results in estimation problem. The derived lower bounds exhibit phase transitions with respect to the corruption rate and confirm that robust testing is statistically easier than robust estimation. While the information-theoretic upper bound is achieved by a computationally intractable test, we develop a polynomial-time algorithm that achieves the minimax lower bound up to logarithmic factors. Unlike prior work, our algorithm handles signals of arbitrary Euclidean length while respecting the QCO constraints. Finally, we extend these results to the robust $\ell _{p}$ norm testing for $1 \le p < 2$.

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

The preprint of this work is available at <a href="https://arxiv.org/abs/2308.13036" class="custom-link-3">https://arxiv.org/abs/2308.13036</a>, or you can find the up-to-date PDF file <a href="/assets/pdf/main_arXiv.pdf" class="custom-link-3">here</a>.