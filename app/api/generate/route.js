export async function POST(req) {
  try {
    const { input, platform } = await req.json()

    const res = await fetch("https://open.bigmodel.cn/api/anthropic/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.CLAUDE_API_KEY}`
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        messages: [
          {
            role: "user",
            content: `你是一个专业自媒体爆款写手
请围绕这个主题生成内容：

主题：${input}
平台：${platform}

要求：
【标题】
- 给我3个非常吸引点击的标题
- 要有情绪、冲突、反转
- 让人忍不住点开

【正文】
- 用口语化表达
- 有故事感
- 让用户产生共鸣

【标签】
- 给5个热门标签

输出要结构清晰，方便直接复制使用`
          }
        ]
      })
    })

    if (!res.ok) {
      return Response.json({ result: "API 调用失败，请稍后重试" })
    }

    const data = await res.json()

    return Response.json({
      result: data?.content?.[0]?.text || "生成失败"
    })
  } catch (error) {
    return Response.json({ result: "请求出错，请稍后重试" })
  }
}