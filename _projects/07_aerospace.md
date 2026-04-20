---
layout: project
title: "Aerospace Systems and Control"
theme: "Motion Planning and Control"
theme_color: "#0369a1"
sort_order: 4
tagline: "Control, estimation, and modeling for distributed spacecraft systems, autonomous navigation, and propulsion."
papers:
  - label: "CEAS GNC"
    pdf: "lead-follow-consensus.pdf"
  - label: "Int. J. Adaptive Control"
    pdf: "lead-follow-consensus-2.pdf"
  - label: "IEEE GNC 2018"
    pdf: "los_publication.pdf"
  - label: "Preprint"
    pdf: "ramjet_publication.pdf"
---

This project brings together my early work in aerospace systems and control across three connected directions: distributed coordination of networked spacecraft systems, autonomous relative navigation, and propulsion-oriented modeling. A common theme across all three is developing mathematically grounded methods for dynamical systems operating under sensing, communication, and physical constraints.

### Distributed coordination under measurement bias

I studied distributed synchronization and consensus for networked aerospace systems when relative measurements are corrupted by unknown constant sensor bias. This work developed adaptive control laws that estimate and compensate bias while preserving coordination objectives. In spacecraft formation control, this led to a model-independent synchronization law for Euler-Lagrange systems with biased relative position measurements. In related work on networked double-integrator systems, I developed an adaptive consensus framework that achieves exact bias estimation together with exponential position consensus over time-varying graphs.

### Relative spacecraft navigation without communication

I also worked on autonomous relative navigation for spacecraft formations using only line-of-sight measurements, developing an extended Kalman filter framework for estimating relative attitude, angular velocity, position, and velocity without requiring inter-spacecraft communication or onboard gyros.

### Propulsion modeling

A third direction focused on theoretical propulsion modeling through the pressure distribution inside jet engines, developing a simplified aero-thermodynamic model connecting thermodynamic and geometric design parameters to thrust production in turbojet, ramjet, and scramjet settings.
