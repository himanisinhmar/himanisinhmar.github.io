---
layout: project
title: "Environment Monitoring in the Wild"
theme: "Neuromorphic Decision Dynamics and Control"
theme_color: "#4f46e5"
tagline: "Decentralized, game-theoretic, and neuromorphic control for scalable environment monitoring in resource-constrained robot teams."
videos:
  - env-moni.mp4
papers:
  - label: "Preprint"
    pdf: "game-theory.pdf"
---

This project studies how decentralized robot teams can make fast, reliable decisions in environment monitoring tasks using nonlinear decision dynamics. The broader goal is to develop robot collectives that continuously adapt online to changing observations, shared resources, and coordination constraints, without relying on centralized planning, persistent communication, or computationally heavy optimization.

A central thread of this work develops neuromorphic nonlinear decision dynamics as a mechanistic realization of game-theoretic best response for structured multi-agent decision problems. Instead of treating action selection as an instantaneous optimization or sampling step, the framework models decision-making as an internal dynamical process whose stable attractors encode committed sensing, allocation, or motion choices. In repeated coverage games, this produces geometry-aware decision-making, rapid commitment, reduced oscillatory switching, and convergence to Nash equilibria, making the approach especially well suited for resource-constrained monitoring tasks.

More broadly, this research explores how ideas from robotics, nonlinear dynamics, and game theory can be combined to produce emergent collective intelligence in robot teams. The long-term vision is to build scalable autonomous systems for monitoring and exploration in the wild, where robots must allocate sensing effort and coordinate behavior using only local information under severe resource constraints.
