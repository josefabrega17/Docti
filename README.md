# Docti Public Rebuild

This repository recreates and upgrades the public Docti surfaces:

- `/` landing page
- `/pro` doctor-facing value proposition page
- `/connect` patient-facing marketplace page
- `/preview` interactive Docti Pro demo

## Run locally

This repo includes a tiny Node static server with no external dependencies.

```bash
/Users/josealfonsofabrega/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node serve.mjs
```

Then open:

- `http://localhost:4173/`
- `http://localhost:4173/pro/`
- `http://localhost:4173/connect/`
- `http://localhost:4173/preview/`

## Notes

- The interactive preview is intentionally a polished public demo, not a production medical system.
- All flows are front-end only and use curated sample data.
