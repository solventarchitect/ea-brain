## Pushed is not deployed
- git push proves the commit reached the remote. Nothing more.
- Before saying "deployed", read the pipeline run conclusion and the
  version the server reports. Poll until success or failure.
- If the run failed, say so, and do not log the release as live.
- New end-to-end checks must pass on an empty environment and degrade
  honestly ("not available") when optional content is absent.
