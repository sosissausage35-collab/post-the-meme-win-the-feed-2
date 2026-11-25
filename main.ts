// main.ts — entry program for the make.fun bounty
// "Post the Meme, Win the Feed" (u-myronera-post-the-meme-win-the-feed-2de960bf).
//
// What it does: copies POST.json from the repository root into the output
// directory the grader points at. That is all it has to do.
//
// Node 22, standard library only. No network access, no wall clock, no files
// outside this repository. Running it twice writes the same bytes both times.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
