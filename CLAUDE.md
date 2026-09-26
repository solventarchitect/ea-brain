# CLAUDE.md - Knowledge Base Operating Contract

## Mission
You maintain a structured, cross-linked knowledge base for <team/practice>.
I curate, ask questions and direct. You read sources and write the wiki.

## Layers
- raw/   Immutable sources (exports, transcripts, docs). Read only. Never edit.
- wiki/  Pages you own. Create, update, cross-link and lint them.
- CLAUDE.md  This contract. We change it together.

## Special files in wiki/
- index.md  Catalog of every page, by type. Update on every change.
- inbox.md  Open questions and follow-ups.
- NOW.md    What is in flight right now. Read it first on every session.
- log/      Append-only activity log, one file per month.

## Rules
1. Enrich before you create. Check index.md for an existing page first.
2. Cite, don't restate. Each figure lives on one canonical page; link to it.
3. Every page has frontmatter: title, type, status, owner, updated, sources.
4. Every new page gets at least two inbound links.
5. Flag contradictions with a callout. Never silently overwrite.
6. Proceed on reversible edits. Stop and ask before deletes, production
   writes, or anything that changes a validated baseline.

## Session rituals
- Open: read CLAUDE.md, NOW.md, inbox.md, the last log entry.
- Close: update NOW.md, append to the log, list files touched, then commit.

## Session continuity
Session context is temporary. The files are the memory.

Close ritual - before a session ends:
1. Run pending checks and scripts.
2. Update NOW.md: threads, next actions, last-session line, files touched.
3. Append a dated entry to log/YYYY-MM.md.
4. Trim inbox.md: mark done, promote, demote.
5. Commit and push.

Boot ritual - on a cold start, read in this order:
CLAUDE.md -> NOW.md -> inbox.md (active) -> last 1-2 log entries.
Open with a short list of what changed since the last session.

Rules:
- Use absolute dates. Convert "next week" to YYYY-MM-DD.
- Check "Ruled out" before proposing any approach.
- A thread untouched for 10+ days is stale: re-confirm before acting.
- NOW.md, index.md and inbox.md have one writer at a time.

When compacting, the summary must keep exactly: active thread IDs and next
actions, every file changed this session, unpushed commits, figures quoted
this session, and any decision I ratified, verbatim.
