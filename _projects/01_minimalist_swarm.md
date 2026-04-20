---
layout: project
title: "Minimalist Robotic Swarms for Target Encapsulation"
theme: "Collective Intelligence"
theme_color: "#0d9488"
tagline: "Provably correct decentralized control for robot swarms with no memory, no communication, and no localization."
videos:
  - phd_square.mp4
papers:
  - label: "TRO 2023"
    pdf: "TRO.pdf"
  - label: "IROS 2022"
    pdf: "IROS.pdf"
  - label: "DARS 2024"
    pdf: "DARS.pdf"
---

This project develops a control-theoretic foundation for minimalist robotic swarms: teams of simple reactive robots with no memory, no explicit communication, no self-localization, and no knowledge of the relative positions of neighbors or targets. The central question is how such severely resource-constrained robots can nevertheless produce reliable collective behavior with formal guarantees.

My work addresses this through decentralized control laws for target search, source localization, and encapsulation in bounded and cluttered environments. The early work established correct-by-construction decentralized control laws for guaranteed target encapsulation while avoiding collisions with robots and boundaries, together with explicit bounds on task and robot parameters and robustness analyses under sensor noise and asynchronous execution.

This was then extended to dynamic targets with unknown motion, where I introduced orbiting and encirclement behaviors and derived conditions under which a minimalist swarm can provably encapsulate moving targets, including stochastic guarantees when targets can move faster than individual robots.

More recent work generalized this framework to multiple diffusive sources in obstacle-cluttered environments, including the challenging case of overlapping source influence regions. There, I developed a derivative-free distributed sensing method based on simplex gradients to identify and encapsulate multiple sources without communication or relative localization, and derived trade-offs among sensing, control, and task parameters for guaranteed safe convergence.
