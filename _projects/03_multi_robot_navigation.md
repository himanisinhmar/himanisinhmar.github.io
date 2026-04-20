---
layout: project
title: "Multi-Robot Social Navigation in Crowded Environments"
theme: "Neuromorphic Decision Dynamics and Control"
theme_color: "#4f46e5"
tagline: "Safe, scalable, and deadlock-free multi-robot navigation through continuous adaptation and local interaction rules."
sort_order: 2
videos:
  - env.mp4
  - decision.mp4
  - hardware_video.mp4
---

This project develops decentralized control methods for safe and scalable multi-robot navigation in crowded, uncertain, and heterogeneous environments. The central question is how robots can resolve local conflicts and maintain global progress using only local sensing, without explicit communication, trajectory replanning, or centralized coordination. My approach is based on continuous-time decision dynamics that amplify latent temporal structure already present in local interaction geometry, allowing coordinated traversal order to emerge online from observed motion.

A core contribution of this work is a neuromorphic speed-modulation framework in which each robot preserves its nominal path and continuously adjusts only its traversal speed. Rather than relying on long-horizon optimization or repeated replanning, the controller uses local spatiotemporal conflict cues, such as relative arrival times to shared conflict regions, to generate controlled instability that resolves ambiguity and prevents deadlock. This yields smooth conflict resolution through local interaction alone, while retaining formal guarantees of collision avoidance, deadlock-free operation, and global liveness.

More recently, I have extended this framework to heterogeneous environments containing non-reciprocating or human-like agents. In this setting, robots continuously infer whether nearby agents are cooperating based on whether their motion helps reduce potential conflict, and adapt their control decisions accordingly. The broader goal of this project is to establish a control-theoretic foundation for navigation in social and mixed-autonomy spaces, where scalable coordination must emerge online from local sensing under limited communication and computation.
