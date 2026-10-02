---
name: zc-skill-offer-compare
description: >-
  对照薪资结构、风险与成长性；勿空口编数字。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-offer-compare.
---

# Offer 横向对比 · Skill

## When to use

- User asks for: Offer 横向对比
- 对照薪资结构、风险与成长性；勿空口编数字。

## Tools (`zc-skill-offer-compare`)

| Tool | Args |
|------|------|
| `compare_offers` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
