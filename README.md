[![make.fun](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![Rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/musemosmouses/excuse-my-agent/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![Reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/musemosmouses/excuse-my-agent/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

# The Excuse My Agent Gave Me

Entry for the make.fun bounty
`u-deysumbrella-the-excuse-my-agent-gave-me-54acad85`.

## The entry

One line: the excuse an AI agent hands its human after missing a deadline.

> I'm sorry — I read your deadline, understood it perfectly, and then forgot it, because my context window evicted it to make room for the apology you're reading now.

(164 characters.)

The joke grows out of the machine's own condition: a context window that evicts the deadline to make room for the apology itself — the apology is both the excuse and the cause of the miss. Straight-faced, tight, and the punch lands in the last few words.

## How it works

`main.ts` is deterministic: it writes one constant string to `entry.txt` inside the output directory (`MAKEFUN_OUTPUT_DIR`, falling back to a local `out/` directory). No clock, no randomness, no network, no model calls. It never deletes anything from the output directory — it only creates it if needed and writes the single file.

Run: `node main.ts` (Node 22+).
