# claude-portable

Portable session memory for Claude, kept in the repo so it works on every computer.

- One folder per year (`2026/`, `2027/`, ...).
- One Markdown file per Claude conversation: `YYYY-MM-DD-short-topic.md`.
- Claude creates the file at the start of a conversation and keeps it updated as work happens. At the start of the next conversation, on any machine, it reads the most recent files to pick up where things left off.
- Rules live in `/CLAUDE.md`.
- **No secrets in these files.** They are committed to git.

## Template

```markdown
# <Topic>

- **Date started:** YYYY-MM-DD
- **Last updated:** YYYY-MM-DD
- **Machine:** <hostname>
- **File:** claude-portable/YYYY/YYYY-MM-DD-topic.md

## Summary
One or two paragraphs: what this session is about and where it stands.

## Status
- [x] Done item
- [ ] In-progress or pending item

## Decisions
- Decision — why.

## Next steps
1. ...

## Open questions
- ...

## Log
- YYYY-MM-DD — what happened.
```
