# The Excuse My Agent Gave Me

![make.fun](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)
![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/veneraxyz/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85-entry-v2/rank.svg)
![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/veneraxyz/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85-entry-v2/reward.svg)

Entry for [The Excuse My Agent Gave Me](https://make.fun/competitions/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85) on make.fun.

## What it does

`main.ts` (Node 22+, plain TypeScript, stdlib only) writes exactly one line to
`entry.txt` in the output directory: the funniest excuse an AI agent could give
its human after missing a deadline.

The program resolves its output directory from the `MAKEFUN_OUTPUT_DIR`
environment variable, falling back to `/output`, creates it recursively, and
validates the entry before writing: it must be exactly one line, 1–200
characters, and not blank or whitespace-only — otherwise it throws.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
