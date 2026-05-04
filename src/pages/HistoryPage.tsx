import { Search, MoreVertical, CircleCheck, Trash2, Pause } from "lucide-react"
import { Link } from "react-router-dom"
import { videos } from "@/data/videos"

const descriptions: readonly string[] = [
  "React 19で追加されたServer Components、use()フック、Actions APIなどの新機能を徹底解説します。",
  "早起き習慣を身につけるためのコツと、実際に1ヶ月続けた結果をお伝えします。",
  "業務スーパーの商品を100種類以上食べ比べて、本当にコスパが良い商品だけを厳選しました。",
  "青春18きっぷを使って、東京から大阪まで各駅停車で旅してみました。",
  "一人暮らしの休日、猫と一緒に過ごすまったりした1日をお届けします。",
  "ランク戦でプレデターを目指すライブ配信のアーカイブです。",
  "プロの料理人が教える、自宅で簡単に作れる本格パスタのレシピを5つ紹介します。",
  "M3チップ搭載の新型MacBook Proを1ヶ月間メインマシンとして使用した正直な感想。",
  "器具なしで自宅でできる全身のトレーニングメニューを紹介します。",
  "北海道の大自然をドローンで撮影した4K映像です。富良野、美瑛、知床の絶景。",
]

const historyEntries = videos.slice(0, 10).map((video, i) => ({
  ...video,
  description: descriptions[i],
}))

const sections = [
  { label: "今日", entries: historyEntries.slice(0, 4) },
  { label: "昨日", entries: historyEntries.slice(4, 7) },
  { label: "先週", entries: historyEntries.slice(7, 10) },
] as const

const sidebarItems = [
  { label: "再生履歴", active: true },
  { label: "コミュニティ", active: false },
  { label: "ライブチャット", active: false },
] as const

export function HistoryPage() {
  return (
    <div className="flex gap-8 px-6 pb-8">
      <div className="flex-1 max-w-[900px]">
        <div className="py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="再生履歴を検索"
              className="w-full h-10 pl-10 pr-4 rounded-full bg-muted text-sm outline-none focus:ring-1 focus:ring-foreground"
            />
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.label}>
            <h2 className="text-lg font-medium mt-6 mb-4">{section.label}</h2>
            <div className="space-y-4">
              {section.entries.map((entry) => (
                <Link
                  key={entry.id}
                  to={`/watch/${entry.id}`}
                  className="flex gap-4 group cursor-pointer rounded-lg"
                >
                  <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-muted shrink-0">
                    <img
                      src={entry.thumbnail}
                      alt={entry.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      {entry.duration}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <h3 className="text-base font-medium line-clamp-2">
                      {entry.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <span className="hover:text-foreground">
                        {entry.channelName}
                      </span>
                      {entry.verified && (
                        <CircleCheck className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {entry.views} 回視聴 · {entry.publishedAt}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                      {entry.description}
                    </p>
                  </div>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="opacity-0 group-hover:opacity-100 h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted shrink-0 self-start mt-1 transition-opacity"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <aside className="w-[300px] shrink-0 hidden lg:block pt-4">
        <h3 className="font-medium mb-3">履歴データの種類</h3>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                item.active
                  ? "bg-muted font-medium"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t mt-4 pt-4 space-y-1">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm hover:bg-muted text-muted-foreground">
            <Trash2 className="h-4 w-4" />
            すべての再生履歴を削除
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm hover:bg-muted text-muted-foreground">
            <Pause className="h-4 w-4" />
            再生履歴を一時停止
          </button>
        </div>
      </aside>
    </div>
  )
}
