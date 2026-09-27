## Contract export reconcile (every new export)
1. Diff on contract number vs the prior export:
   added / removed / changed (vendor, amount, end, renewal, state).
2. Successor-trace every removed or cancelled contract:
   same vendor + overlapping scope + active = renamed, not lost.
   Only "no successor" means exited.
3. Procurement owns the contract record. Architecture reflects changes
   downstream: disposition, cost of ownership, new registrations.
4. One contract line = one business application. Never fold a contract
   into a parent platform because of a shared team or label.
5. Record each finding once, dated, in the contract register; link it
   from the affected application pages.
