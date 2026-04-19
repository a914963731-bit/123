export async function GET() {
  const res = await fetch("https://open.bigmodel.cn/api/anthropic/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.CLAUDE_API_KEY}`
    },
    body: JSON.stringify({
      model: "claude-3-haiku-20240307",
      max_tokens: 200,
      messages: [
        {
          role: "user",
          content: "写3个关于减肥的爆款标题"
        }
      ]
    })
  })

  const data = await res.json()
  return Response.json(data)
}