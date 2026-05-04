import { videos } from "@/data/videos"
import { sidebarChannels } from "@/data/channels"
import { VideoCard } from "@/components/home/VideoCard"
import type { Channel } from "@/data/channels"

const extraChannels: readonly Channel[] = [
  {
    name: "ライフハックch",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%83%A9%E3%82%A4%E3%83%95%E3%83%8F%E3%83%83%E3%82%AFch&background=random&size=72",
  },
  {
    name: "ゲーム実況MAX",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%82%B2%E3%83%BC%E3%83%A0%E5%AE%9F%E6%B3%81MAX&background=random&size=72",
  },
  {
    name: "フィットネスジャパン",
    avatar:
      "https://ui-avatars.com/api/?name=%E3%83%95%E3%82%A3%E3%83%83%E3%83%88%E3%83%8D%E3%82%B9%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3&background=random&size=72",
  },
]

const allChannels: readonly Channel[] = [...sidebarChannels, ...extraChannels]

const sections = [
  { label: "今日", items: videos.slice(0, 3) },
  { label: "昨日", items: videos.slice(3, 6) },
  { label: "今週", items: videos.slice(6, 8) },
] as const

export function SubscriptionsPage() {
  return (
    <div className="px-6 pb-8">
      <div className="flex gap-6 py-4 overflow-x-auto scrollbar-hide border-b">
        {allChannels.map((channel) => (
          <div
            key={channel.name}
            className="flex flex-col items-center gap-1 shrink-0"
          >
            <img
              src={channel.avatar}
              alt={channel.name}
              className="h-12 w-12 rounded-full bg-muted"
            />
            <span className="text-xs text-muted-foreground truncate max-w-[72px]">
              {channel.name}
            </span>
          </div>
        ))}
      </div>

      {sections.map((section) => (
        <div key={section.label}>
          <h2 className="text-lg font-medium mt-6 mb-4">{section.label}</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
            {section.items.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
