import { useState } from "react"

interface DescriptionProps {
  readonly views: string
  readonly publishedAt: string
}

const descriptionText = `今回の動画では、話題のトピックについて徹底的に解説していきます。
初心者の方でも分かるように、基本的な概念から丁寧に説明しています。

▼ タイムスタンプ
0:00 オープニング
1:23 基本概念の説明
5:45 実践デモ
10:30 応用テクニック
15:00 よくある質問
20:15 まとめ

▼ 参考リンク
公式ドキュメント: https://example.com/docs
関連記事: https://example.com/blog

チャンネル登録と高評価をお願いします！
コメント欄で質問もお待ちしています。`

export function Description({ views, publishedAt }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="mt-3 bg-muted rounded-xl px-3 py-3 cursor-pointer text-sm"
      onClick={() => !expanded && setExpanded(true)}
    >
      <p className="font-medium">
        {views} 回視聴 · {publishedAt}{" "}
        <span className="text-blue-700">#プログラミング #初心者</span>
      </p>
      <p
        className={`mt-2 whitespace-pre-line ${expanded ? "" : "line-clamp-3"}`}
      >
        {descriptionText}
      </p>
      {expanded ? (
        <button
          className="font-medium mt-2 block"
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(false)
          }}
        >
          一部を表示
        </button>
      ) : (
        <p className="font-medium mt-1">もっと見る</p>
      )}
    </div>
  )
}
