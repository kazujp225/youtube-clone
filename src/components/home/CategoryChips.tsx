import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  "すべて",
  "音楽",
  "ライブ",
  "ゲーム",
  "ニュース",
  "料理",
  "スポーツ",
  "レシピ",
  "Vlog",
  "プログラミング",
  "映画",
  "コメディ",
  "インタビュー",
  "ポッドキャスト",
  "最近アップロードされた動画",
  "視聴済み",
  "新着動画",
  "美容",
  "動物",
  "DIY",
] as const

export function CategoryChips() {
  const [selected, setSelected] = useState("すべて")

  return (
    <div className="flex gap-3 py-3 overflow-x-auto scrollbar-hide sticky top-14 bg-white z-10 -mx-6 px-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelected(category)}
          className={cn(
            "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
            selected === category
              ? "bg-foreground text-background"
              : "bg-muted text-foreground hover:bg-muted-foreground/20"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
