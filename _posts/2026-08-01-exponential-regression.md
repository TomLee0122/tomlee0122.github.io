---
title: "Minimaxity and Efficiency in Exponential Family Regression: From Star-Shaped to Convex Constraints"
excerpt: |
  <div>
  <span style="font-size:0.9em;color: #808080">With Guanghong Yi, Matey Neykov</span>
  </div>
  
  <div class="excerpt-image-container" style="max-width: 60%; position: relative;">
    
    <img src='/assets/images/Research/exponential-regression/excerpt.png' 
         alt='Research excerpt light' 
         class="img-light" 
         style='width: 100%; height: auto; display: block;'>
    
    <img src='/assets/images/Research/exponential-regression/excerpt_invert.png' 
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
last_modified_at: 2026-08-01
toc: false
permalink: /research-tags/exponential-regression
---

# <span style="color: #8E403A;">Authors</span>

<b><a href="https://tomlee0122.github.io/" class="custom-link-3">Yikun Li</a></b><br> 
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:YikunLi2028@u.northwestern.edu" class="custom-link-3">YikunLi2028@u.northwestern.edu</a>

<b>Guanghong Yi</b><br> 
<b>Affiliation</b>: Department of Statistics, George Mason University<br>
<b>Email</b>: <a href="mailto:GuanghongYi2025@u.northwestern.edu" class="custom-link-3">GuanghongYi2025@u.northwestern.edu</a>

<b><a href="https://mateyneykov.com/" class="custom-link-3">Matey Neykov</a></b><br>
<b>Affiliation</b>: Department of Statistics and Data Science, Northwestern University<br>
<b>Email</b>: <a href="mailto:mneykov@northwestern.edu" class="custom-link-3">mneykov@northwestern.edu</a>

# <span style="color: #8E403A;">Abstract</span>

This paper establishes the minimax estimation rate for nonparametric exponential family regression under star-shaped constraints. We consider a parameter space $K$ that is a star-shaped subset of the hypercube $[-M, M]^n$ for a known constant $M > 0$. We operate under the assumption that the underlying exponential family is nonsingular with a twice continuously differentiable log-partition function. Our main result demonstrates that the minimax rate of the $\ell _{2}$ error of such estimation problem is $\epsilon^{* 2} \wedge \operatorname{diam}(K)^2$ up to constants exclusively depending on $M$. Here, the critical radius $\epsilon^{* }$ is defined as
\\[
    \epsilon^* = \sup \\{\epsilon \left\lvert\right. \epsilon^2 \kappa(M) \le \log N^{\text{loc}}(\epsilon,c)\\},
\\]
where $N^{\text{loc}}(\epsilon,c)$ denotes the local metric entropy of $K$, and $\kappa(M) > 0, c>0$ are constants depending only on $M$. Such minimax rate is established by a match between an information-theoretic lower bound and an upper bound implied by a theoretical algorithm.

Furthermore, we investigate the computational aspects of this estimation problem. Under mildly stronger assumptions on the constraint set $K$, we propose a computationally efficient, polynomial-time algorithm. We prove that the resulting estimator achieves the minimax optimal rate up to poly-logarithmic factors in the dimension $n$ and the geometric parameters of $K$.

Finally, to illustrate the efficacy of our framework, we derive the minimax optimal rates for some concrete examples.

<div style="text-align: center;">
  
  <div class="blog-image-wrapper" style="max-width: 75%;">
    
    <a href="/assets/images/Research/exponential-regression/excerpt.png" 
       class="link-light">
      <img src="/assets/images/Research/exponential-regression/excerpt.png" 
           alt="Main concepts light">
    </a>

    <a href="/assets/images/Research/exponential-regression/excerpt_invert.png" 
       class="link-dark">
      <img src="/assets/images/Research/exponential-regression/excerpt_invert.png" 
           alt="Main concepts dark">
    </a>
    
  </div>

  <figcaption style="margin-top: 1em; margin-bottom: 1.3em;">
    The image illustrating the main concepts of the work.
  </figcaption>
</div>

# <span style="color: #8E403A;">Availability</span>

The preprint of this work is available <a href="https://arxiv.org/abs/2503.10794v2" class="custom-link-3">here</a>, or you can find the up-to-date PDF file <a href="/assets/pdf/Research/exponential-regression/main_arXiv.pdf" class="custom-link-3">here.

<button id="back-to-top" title="Back to top">↑</button>