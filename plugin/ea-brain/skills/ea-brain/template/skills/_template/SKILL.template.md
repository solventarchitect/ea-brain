---
name: <skill-name>
description: <one line: when to use this>
---

Trigger:   <event, e.g. "new export in raw/exports/"> or <schedule>
Source:    <the one input it reads>
Output:    <the one file or folder it writes - its lane>

Steps:
1. <literal command or action>
2. <literal command or action>
3. <literal command or action>

Verify (compare, don't judge):
- <counts reconcile: rows in = rows written>
- <no orphans>
- <running it twice changes nothing>

Stop and escalate if:
- <the specific ambiguous case> -> write to inbox.md, stop.

Log:
## [YYYY-MM-DD] agent-run | <skill> | <lane>
- did:     <what changed, with counts>
- decided: <judgment calls inside the procedure>
- blocked: <what was escalated, or "none">
- verify:  <the check that passed>
- commit:  <message>
