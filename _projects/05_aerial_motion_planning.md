---
layout: project
title: "Provably Safe Motion Planning for Resource-Constrained UAVs"
theme: "Motion Planning and Control"
theme_color: "#0369a1"
tagline: "Provably safe aerial motion planning under uncertainty, limited computation, and complex workspace constraints."
videos:
  - merl.mp4
papers:
  - label: "ICRA 2024"
    pdf: "merl_1.pdf"
  - label: "TCST"
    pdf: "TCST_merl.pdf"
---

This project develops theoretically grounded motion planning methods for quadrotor UAVs that operate under severe onboard resource constraints while maintaining rigorous safety guarantees. The work is motivated by a central question in autonomous aerial robotics: how can a UAV navigate cluttered environments safely under disturbances, model uncertainty, and actuator limits without depending on computationally expensive online optimization?

I address this through two complementary frameworks. The first develops a practical Explicit Reference Governor approach that modifies setpoints online using navigation functions and Lyapunov-based safety margins, enabling safe flight in bounded three-dimensional environments with polyhedral obstacles while enforcing thrust and tilt constraints. The second develops a robust invariant-set motion planner that computes safe invariant sets offline and uses lightweight online graph search to generate provably safe reference updates in real time.

Together, this research advances a control-theoretic approach to aerial motion planning that emphasizes certifiable safety, computational efficiency, and deployability on low-power robotic platforms.
