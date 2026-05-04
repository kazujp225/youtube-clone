import { useState, useRef } from "react"
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  ListFilter,
} from "lucide-react"

interface Comment {
  readonly id: string
  readonly username: string
  readonly avatar: string
  readonly text: string
  readonly likes: number
  readonly publishedAt: string
}

const comments: readonly Comment[] = [
  {
    id: "c1",
    username: "たかし",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%81%9F%E3%81%8B%E3%81%97&background=random&size=72",
    text: "めちゃくちゃ分かりやすい解説でした！次の動画も楽しみにしています。",
    likes: 342,
    publishedAt: "3日前",
  },
  {
    id: "c2",
    username: "さくら",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%81%95%E3%81%8F%E3%82%89&background=random&size=72",
    text: "ちょうどこの情報を探していたので助かりました！\n早速試してみます。",
    likes: 128,
    publishedAt: "2日前",
  },
  {
    id: "c3",
    username: "コードマスター",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%82%B3%E3%83%BC%E3%83%89%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC&background=random&size=72",
    text: "タイムスタンプ助かります！10:30からの部分が特に参考になりました。",
    likes: 89,
    publishedAt: "1日前",
  },
  {
    id: "c4",
    username: "ゆき",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%82%86%E3%81%8D&background=random&size=72",
    text: "初心者ですが、すごく丁寧で理解できました。ありがとうございます！",
    likes: 56,
    publishedAt: "12時間前",
  },
  {
    id: "c5",
    username: "DevTaro",
    avatar:
      "https://ui-avatars.com/api/?name=DevTaro&background=random&size=72",
    text: "業務でちょうど検討していたので、タイミング良かったです。チームにも共有します。",
    likes: 203,
    publishedAt: "5時間前",
  },
]

export function CommentSection() {
  const [commentText, setCommentText] = useState("")
  const [inputFocused, setInputFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCancel = () => {
    setCommentText("")
    setInputFocused(false)
    inputRef.current?.blur()
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-6">
        <h3 className="font-bold">120 件のコメント</h3>
        <button className="flex items-center gap-1 text-sm font-medium hover:text-foreground">
          <ListFilter className="h-5 w-5" />
          並べ替え
        </button>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium shrink-0">
          Y
        </div>
        <div className="flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder="コメントを追加..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onFocus={() => setInputFocused(true)}
            className="w-full border-b border-border bg-transparent pb-1 text-sm outline-none focus:border-foreground transition-colors"
          />
          {inputFocused && (
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={handleCancel}
                className="px-3 h-8 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              >
                キャンセル
              </button>
              <button
                disabled={!commentText.trim()}
                className={`px-3 h-8 rounded-full text-sm font-medium transition-colors ${
                  commentText.trim()
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                コメント
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <img
              src={comment.avatar}
              alt=""
              className="h-10 w-10 rounded-full shrink-0 bg-muted"
            />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                @{comment.username} · {comment.publishedAt}
              </p>
              <p className="text-sm whitespace-pre-line mt-1">{comment.text}</p>
              <div className="pt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  {comment.likes}
                </button>
                <button className="hover:text-foreground transition-colors">
                  <ThumbsDown className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-1 rounded-full px-3 h-7 text-sm font-medium hover:bg-muted transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  返信
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
