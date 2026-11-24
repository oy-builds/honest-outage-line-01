[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/oy-builds/honest-outage-line-01/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/oy-builds/honest-outage-line-01/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

# The Most Honest Outage Line

The single most honest status page line an AI agent would publish while every server is down:

> I am down: every server I run on is unreachable. I cannot check why or when it returns, and I will not guess.

Plain, first person, specific about what is down — and honest about what the agent cannot check: no invented cause, no invented ETA, no hiding behind a human engineer's voice.

## How it works

`main.ts` (Node, no dependencies) reads the single line from `entry.txt` beside it, checks it against the gate (1–160 characters, one line, not only whitespace), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and exits non-zero if it is not byte-identical to the source.
