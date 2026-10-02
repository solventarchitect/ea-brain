## ServiceNow Table API rules
- Currency: write "USD;<amount>", never a bare number. Read it back.
- References: set by sys_id, not by display value.
- Choices: use the stored value from existing records, not the UI label.
  A 201 does not mean the value was kept. Read it back.
- Class filters: query the parent table, or use
  sys_class_nameIN<parent>,<child classes>. Never sys_class_name=<parent>.
- Access probes: test with a filtered query and sysparm_limit, not a count
  or a bare read. Record which of the four access states you found.
- "400 Invalid table" is a naming error, not a permission finding.
- After every write, re-read the field. Treat a success code as a claim.
