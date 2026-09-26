# ea-brain

A small starter for an AI-maintained knowledge base for an architecture practice: an operating contract, a resume page, and the rules and skills that keep an AI agent honest while it maintains the wiki for you.

These are the copyable pieces from the *AI in the Architecture Practice* and *Application Portfolio Management* series on [mikereams.com](https://mikereams.com/writing), collected in one place. Each file links to the post that explains why it exists.

## Start

1. Click **Use this template** (or clone it) to make your own copy.
2. Open `CLAUDE.md` and replace `<team/practice>` with your practice's name. Change anything else to fit.
3. Drop a first source into `raw/` — an export, meeting notes, a vendor notice.
4. Start an agent session in the folder and ask it to ingest the source. It reads `CLAUDE.md`, then `wiki/NOW.md`, and writes pages under `wiki/`.
5. End every session with the close ritual in `CLAUDE.md`. The files are the memory.

Add rules from `rules/` to `CLAUDE.md` (or your agent's instructions) as you need them. They are written to be pasted in whole.

## What is in here

| File | What it is | Explained in |
|---|---|---|
| [`CLAUDE.md`](CLAUDE.md) | The operating contract: layers, rules, session rituals | [Building an AI Second Brain for Enterprise Architecture](https://mikereams.com/writing/building-an-ai-second-brain-for-enterprise-architecture) |
| [`wiki/NOW.md`](wiki/NOW.md) | Resume state: active threads, tripwires, ruled-out list | [Sessions Forget](https://mikereams.com/writing/sessions-forget-designing-resume-state-for-ai-agents) |
| [`rules/verify-before-assert.md`](rules/verify-before-assert.md) | Claims come from contents, not surfaces | [Green Tests, Broken System](https://mikereams.com/writing/green-tests-broken-system) |
| [`skills/skeptical-reviewer/SKILL.md`](skills/skeptical-reviewer/SKILL.md) | An independent reviewer that assumes the change is wrong | [Never Let the Generator Grade Its Own Work](https://mikereams.com/writing/never-let-the-generator-grade-its-own-work) |
| [`agents/operator.md`](agents/operator.md) | Instructions for the cheaper, bounded operator agent | [Two Tiers](https://mikereams.com/writing/two-tiers-spend-the-expensive-model-only-on-judgment) |
| [`skills/_template/SKILL.md`](skills/_template/SKILL.md) | Template for a bounded, repeatable skill | [Two Tiers](https://mikereams.com/writing/two-tiers-spend-the-expensive-model-only-on-judgment) |
| [`rules/two-lens-capabilities.md`](rules/two-lens-capabilities.md) | Every application: business capabilities plus one technical class | [Every App Needs Two Capabilities](https://mikereams.com/writing/every-app-needs-two-capabilities) |
| [`rules/pushed-is-not-deployed.md`](rules/pushed-is-not-deployed.md) | What counts as evidence of a deploy | [Pushed Is Not Deployed](https://mikereams.com/writing/pushed-is-not-deployed) |
| [`rules/guarded-writes.md`](rules/guarded-writes.md) | Writes to a system of record: dry run, window, confirm, read back | [A Dry Run Is Not Permission](https://mikereams.com/writing/a-dry-run-is-not-permission) |
| [`rules/servicenow-table-api.md`](rules/servicenow-table-api.md) | Table API behaviors that report success and store nothing | [Five ServiceNow API Calls That Return Success and Store Nothing](https://mikereams.com/writing/servicenow-api-calls-that-return-success-and-store-nothing) |
| [`examples/golden-questions.json`](examples/golden-questions.json) | The shape of an answer-quality eval set | [Better Retrieval, Not a Bigger Model](https://mikereams.com/writing/better-retrieval-not-a-bigger-model) |
| [`rules/record-rule.md`](rules/record-rule.md) | Which record a technology request produces | [Software Product or Business Application?](https://mikereams.com/writing/software-product-or-business-application) |
| [`examples/disposition-record.yaml`](examples/disposition-record.yaml) | A disposition with evidence, ratification and a review date | A Disposition Is a Decision, Not a Field (write-up coming) |
| [`rules/contract-reconcile.md`](rules/contract-reconcile.md) | Reconciling contract exports without false exits | A Cancelled Contract Is Usually a Renamed One (write-up coming) |

## What this is not

A starter, not a product. There are no scripts, validators or integrations here, on purpose: the patterns travel, the tooling is yours to build around your own systems. Nothing in this repository comes from any organization's data.

## License

[MIT](LICENSE). Copy it, change it, make it yours.
