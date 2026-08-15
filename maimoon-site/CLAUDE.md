# Claude Code Instructions — Maimoon Website

This file is auto-loaded every session. Full project context, decisions, and
history live in context.md — read it at the start of every session unless
told otherwise.

## Commands

**"update context"** — regenerate context.md:
1. Run `git log --oneline -30` and diff against what's already documented.
2. Review what actually changed in the codebase since the last update.
3. Update the file to reflect current reality — append new sections, update
   anything now outdated (e.g. move a resolved bug from "open" to
   "resolved"), don't just tack on duplicate notes.
4. Show me the diff before saving. Wait for my approval before committing.
5. Once approved: commit alone with a clear message, push.

## Standing rules for this project
(full detail lives in context.md — keep these current here too)
- vite.config.js ssgOptions must never have script: 'async' (causes a
  hydration race that breaks SSG)
- maimoon.in (non-www) must remain the Production domain on Vercel
- Any new component must be checked in both light and dark mode before
  shipping
- Any build-time data loading must use static imports where possible;
  guarded fetches only
