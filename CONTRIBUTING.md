# Contributing

This repo is part of the **TAC-OS** multi-repo system under `The-Abs-Company`. The hub repo (`TAC-OS`) holds the agents, skills, and conventions.

## Branching & collaboration safety
- **`main` is protected by convention — never push to it directly.**
- Make changes on a feature branch and open a pull request; the **repo agent** reviews and merges.
- Activate the local guard once per clone:
  ```bash
  git config core.hooksPath scripts/hooks
  ```
  This blocks accidental direct pushes to `main` (GitHub Free can't hard-enforce it).
- The repo agent is the only git writer. Full rules: `The-Abs-Company/TAC-OS` → `skills/repo-conventions.md`.
