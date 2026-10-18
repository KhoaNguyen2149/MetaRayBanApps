# Recipe Steps: performance baseline

Measured 2026-10-18 with `ai-glasses-webapp-optimize-performance` (Meta Ray-Ban Display device profile:
~500 Kbps, 150 ms RTT, 12× CPU slowdown, 600 × 600). Production build via `vite preview`, n = 10 per run,
`--clear-storage`. Oracle: "Recipes" header plus the Pancakes and Guacamole rows plus ≥ 4 focus targets.

| Run | FCP | Usable content | HTTP wire | Requests |
|---|---|---|---|---|
| Cold | 5,690 ms | 5,486 ms (spread 2,181) | 242,794 B | 6 |
| Warm | 1,442 ms | 1,270 ms (spread 861) | 485 B | 6 |
| Null control (A vs A) | n/a | 406 ms apparent difference (p = 0.42) | -7 B | n/a |

Noise floor: about ±400 ms. Treat smaller differences as noise.

Against Meta's targets:
- Wire 243 KB < 300 KB ✅
- Requests 6 < 15 ✅
- Warm usable 1.3 s < 2 s ✅
- Usable 5.5 s vs < 5 s ❌ (slightly over)
- First paint 5.7 s vs < 1 s ❌

Next optimization candidates (playbook #1 and #5): paint a first frame from `index.html` and add `modulepreload`.
Most bytes are React plus the UI Toolkit JS/CSS (toolkit CSS is report-only per the playbook).
