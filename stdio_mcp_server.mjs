#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "offer-compare",
  "titleZh": "Offer 横向对比",
  "summary": "对照薪资结构、风险与成长性；勿空口编数字。",
  "tools": [
    "compare_offers"
  ],
  "proxyTools": {
    "compare_offers": "zc_offer_compare"
  },
  "localKind": "eval"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
