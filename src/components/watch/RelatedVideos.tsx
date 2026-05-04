import { useState } from "react"
import { Link } from "react-router-dom"
import { CircleCheck, MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Video } from "@/data/videos"

const tabs = [
  "すべて",
  "あなたへのおすすめ",
  "最近アップロード",
  "視聴済み",
] as const

interface RelatedVideosProps {
  readonly videos: readonly Video[]
}

export function RelatedVideos({ videos }: RelatedVideosProps) {
  const [selectedTab, setSelectedTab] = useState("すべて")

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
              selectedTab === tab
                ? "bg-foreground text-background"
                : "bg-muted text-foreground hover:bg-muted-foreground/20"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-3 space-y-2">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/watch/${video.id}`}
            className="flex gap-2 cursor-pointer group relative"
          >
            <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-muted shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-medium px-1 py-0.5 rounded">
                {video.duration}
              </span>
            </div>
            <div className="flex-1 min-w-0 pr-6">
              <h4 className="font-medium text-sm line-clamp-2 leading-tight">
                {video.title}
              </h4>
              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <span>{video.channelName}</span>
                {video.verified && (
                  <CircleCheck className="h-3 w-3 shrink-0" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {video.views} 回視聴 · {video.publishedAt}
              </p>
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="opacity-0 group-hover:opacity-100 absolute right-0 top-0 h-6 w-6 flex items-center justify-center rounded-full hover:bg-muted transition-opacity"
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
