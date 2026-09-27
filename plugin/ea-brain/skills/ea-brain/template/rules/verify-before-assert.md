## Verify before you assert
A claim about an artifact must come from its contents, not its surface.
Filenames, sizes, commit counts and green badges support a hypothesis,
never a verdict. Open the thing.

- Fixtures: build test fixtures from real upstream rows. Record the date
  you read them beside the fixture. Re-read when the contract changes.
- Lookup tables: derive them from the source where possible. If one must
  be hand-maintained, make it report entries that matched nothing.
- Source-scanning checks: anchor on a function or block boundary, never
  on a character or byte offset.
- Permissive assertions: when a test asserts that something permissive
  happens, confirm someone decided that. If you invert one, say so in
  the commit message.
- UI: any new or changed user-facing feature ships with at least one
  test that drives real clicks and keys against real data.
- Before any delete or archive, confirm from contents and confirm the
  work is pushed.
