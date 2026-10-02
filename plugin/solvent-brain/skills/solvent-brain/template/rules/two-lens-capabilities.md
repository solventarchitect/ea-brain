## Two-lens capability rule
Every application page carries both lenses:

- business_capabilities: [..]   What it serves. Many per app is normal.
- technical_capability: <code>  What it is. Exactly ONE primary code from
                                the technical tree (mutually exclusive,
                                collectively exhaustive).

Rules:
- A new application enters the inventory with both lenses, or with an
  explicit gap flag. Never business-only.
- Classify on what the system is for, not keywords in its description.
- AI-proposed codes carry source: ai-proposed and a confidence (0-1).
  They are not authoritative until a person ratifies them.
- Consolidation candidates share business capabilities AND the same
  primary technical code. Record both as the evidence.
