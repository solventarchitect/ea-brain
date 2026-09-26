## Writes to a system of record
- Read-only by default. Writes open in a timed window that closes itself.
- Every write is dry-run first: read the record, show the diff, send nothing.
- A commit names its target record explicitly. Mismatch = refuse.
- Production commits carry a confirmation code from their dry run, bound
  to the record's before-state. If the record changed, dry-run again.
- A clean dry run proves READ access only. For any new table or field:
  commit ONE record, read it back, compare to the diff, then batch.
  Record the result with a date.
- Update-only. No inserts or deletes unless explicitly approved.
- A 200 is not proof. Read back the field you wrote.
- Unknown flags and parameters are rejected, never ignored.
