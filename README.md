# Offer 横向对比

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

对照薪资结构、风险与成长性；勿空口编数字。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-offer-compare
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-offer-compare": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-offer-compare/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `compare_offers` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-offer-compare/SKILL.md`.

## License

MIT — see `LICENSE`.
