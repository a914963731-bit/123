"use client"
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [platform, setPlatform] = useState("小红书")
  const [count, setCount] = useState(0)

  const handleGenerate = async () => {
    if (!input) return
    if (count >= 3) {
      alert("今日次数已用完")
      return
    }
    setCount(count + 1)

    setLoading(true)
    setResult("")

    try {
      const res = await fetch("https://open.bigmodel.cn/api/anthropic/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 4e4f6254033a4e97a34544769670a141.WKi2gg6jygdXgZUs"
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
      const data = await res.json()
      setResult(data?.content?.[0]?.text || "生成失败")
    } catch (error) {
      setResult("请求出错，请稍后重试")
    }

    setLoading(false)
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      padding: 40,
      fontFamily: "'Courier New', monospace"
    }}>

      {/* 标题 */}
      <h1 style={{
        fontSize: 48,
        fontWeight: 900,
        color: "#e94560",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 4,
        textShadow: "4px 4px 0 #000, 8px 8px 0 #333"
      }}>
        🔥 AI 爆款文案生成器 🔥
      </h1>

      <p style={{
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        marginBottom: 40,
        opacity: 0.8
      }}>
        一键生成爆款标题 + 情绪文案 + 热门标签
      </p>

      {/* 输入框区域 */}
      <div style={{
        maxWidth: 700,
        margin: "0 auto",
        background: "#0f0f23",
        border: "4px solid #e94560",
        borderRadius: 0,
        padding: 30,
        boxShadow: "10px 10px 0 #000"
      }}>

        <label style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 15,
          display: "block"
        }}>
          💎 输入你的主题
        </label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            fontSize: 16,
            background: "#1a1a2e",
            border: "3px solid #fff",
            borderRadius: 0,
            color: "#fff",
            marginBottom: 15,
            cursor: "pointer",
            outline: "none"
          }}
        >
          <option>小红书</option>
          <option>抖音</option>
          <option>通用</option>
        </select>

        <textarea
          placeholder="例如：减肥、副业、赚钱、恋爱、职场..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            height: 80,
            background: "#1a1a2e",
            border: "3px solid #fff",
            borderRadius: 0,
            padding: 15,
            fontSize: 18,
            color: "#fff",
            resize: "none",
            outline: "none"
          }}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: 20,
            padding: "18px 40px",
            fontSize: 22,
            fontWeight: 900,
            background: loading ? "#333" : "#e94560",
            color: "#fff",
            border: "4px solid #fff",
            borderRadius: 0,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "6px 6px 0 #000",
            letterSpacing: 2
          }}
        >
          {loading ? "⚡ 生成中..." : "🚀 一键生成爆款"}
        </button>
      </div>

      {/* 结果区域 */}
      {result && (
        <div style={{
          maxWidth: 700,
          margin: "40px auto 0",
          background: "#0f0f23",
          border: "4px solid #00ff88",
          borderRadius: 0,
          padding: 30,
          boxShadow: "10px 10px 0 #000"
        }}>
          <h2 style={{
            color: "#00ff88",
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 20,
            letterSpacing: 2
          }}>
            ✅ 爆款文案已生成
          </h2>
          <pre style={{
            whiteSpace: "pre-wrap",
            color: "#fff",
            fontSize: 16,
            lineHeight: 1.8,
            fontFamily: "'Courier New', monospace"
          }}>
            {result}
          </pre>
        </div>
      )}

      {/* 底部 */}
      <footer style={{
        textAlign: "center",
        marginTop: 60,
        color: "#666",
        fontSize: 14
      }}>
        Made with 🔥 by AI
      </footer>
    </div>
  )
}