---
title: Efficient Robust Constrained Signal Detection via Kolmogorov Width Approximations
excerpt: |
  <div>
  <span style="font-size:0.9em;color: #808080">With Matey Neykov</span>
  </div>
  
  <div class="excerpt-image-container" style="max-width: 60%; position: relative;">
    
    <img src='/assets/images/Research/robust_minimax_testing_ii/excerpt.png' 
         alt='Research excerpt light' 
         class="img-light" 
         style='width: 100%; height: auto; display: block;'>
    
    <img src='/assets/images/Research/robust_minimax_testing_ii/excerpt_invert.png' 
         alt='Research excerpt dark' 
         class="img-dark" 
         style='width: 100%; height: auto; position: absolute; top: 0; left: 0;'>
         
  </div>
  <hr style="width: 100%; height: 2px; background-color:#b8b8b8; border: none;">
categories:
  - Research
tags:
  - Optimization
layout: single
classes: wide
mathjax: true
author_profile: true
authors:
  - yikun
related: false
read_time: false
last_modified_at: 2026-04-10
toc: false
permalink: /research-tags/robust-minimax-testing-ii
published: false
---

# <span style="color: #8E403A;">Authors</span>

<b><a href="https://tomlee0122.github.io/" class="custom-link-3">Yikun Li</a></b><br> 
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:YikunLi2028@u.northwestern.edu" class="custom-link-3">YikunLi2028@u.northwestern.edu</a>

<b><a href="https://mateyneykov.com/" class="custom-link-3">Matey Neykov</a></b><br>
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:mneykov@northwestern.edu" class="custom-link-3">mneykov@northwestern.edu</a>

# <span style="color: #8E403A;">Abstract</span>

Robust statistical inference often faces a severe computational-statistical gap when dealing with complex parameter spaces. We investigate minimax signal detection in the Gaussian sequence model under strong $\epsilon$-contamination, where the signal belongs to a general prior constraint $K$. Existing optimal tests require computing the exact Kolmogorov $k$-width of $K$, a computationally intractable task for general non-trivial sets. We bridge this gap by proposing a polynomial-time testing framework that universally applies to balanced, type-2, and exactly 2-convex constraints. By leveraging a semidefinite programming relaxation and a modified ellipsoid method equipped with an approximate subgradient oracle, we efficiently approximate the Kolmogorov widths. Remarkably, our unconditional efficient algorithm achieves a robust detection boundary that matches existing upper bounds up to a mere polylogarithmic factor. This establishes a computationally tractable testing solution for a broad class of structured signals without requiring prior knowledge of their exact geometric complexity.

<div style="text-align: center;">
  
  <div class="blog-image-wrapper" style="max-width: 75%;">
    
    <a href="/assets/images/Research/robust_minimax_testing_ii/excerpt.png" 
       class="link-light">
      <img src="/assets/images/Research/robust_minimax_testing_ii/excerpt.png" 
           alt="Main concepts light">
    </a>

    <a href="/assets/images/Research/robust_minimax_testing_ii/excerpt_invert.png" 
       class="link-dark">
      <img src="/assets/images/Research/robust_minimax_testing_ii/excerpt_invert.png" 
           alt="Main concepts dark">
    </a>
    
  </div>

  <figcaption style="margin-top: 1em; margin-bottom: 1.3em;">
    The image illustrating the main technique of the work.
  </figcaption>
</div>

# <span style="color: #8E403A;">Availability</span>

You can find the up-to-date preprint PDF file of this work <a href="/assets/pdf/Research/robust-minimax-testing-ii/main_arXiv.pdf" class="custom-link-3">here</a>.

<button id="back-to-top" title="Back to top">↑</button>