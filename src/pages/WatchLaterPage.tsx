import { Play, Shuffle, MoreVertical, CircleCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { videos } from "@/data/videos"

const watchLaterVideos = videos.slice(0, 8)

export function WatchLaterPage() {
  return (
    <div className="flex gap-6 px-6 pb-8 pt-4">
      <div className="w-[360px] shrink-0 sticky top-20 h-fit hidden md:block">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-muted-foreground/20 to-muted p-6">
          <div className="rounded-xl overflow-hidden">
            <img
              src={watchLaterVideos[0].thumbnail}
              alt=""
              className="w-full aspect-video object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">後で見る</h1>
          <p className="text-sm text-muted-foreground mt-1">
            ユーザー · {watchLaterVideos.length} 本の動画
          </p>
          <div className="flex gap-2 mt-4">
            <Link
              to={`/watch/${watchLaterVideos[0].id}`}
              className="flex-1 bg-foreground text-background rounded-full h-9 flex items-center justify-center gap-2 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Play className="h-4 w-4" fill="currentColor" />
              すべて再生
            </Link>
            <button className="flex-1 bg-muted rounded-full h-9 flex items-center justify-center gap-2 font-medium text-sm hover:bg-muted-foreground/20 transition-colors">
              <Shuffle className="h-4 w-4" />
              シャッフル
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="space-y-1">
          {watchLaterVideos.map((video, i) => (
            <Link
              key={video.id}
              to={`/watch/${video.id}`}
              className="flex items-center gap-2 group cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <span className="w-8 text-center text-sm text-muted-foreground shrink-0 tabular-nums">
                {i + 1}
              </span>
              <div className="relative w-40 aspect-video rounded-lg overflow-hidden bg-muted shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[11px] font-medium px-1 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm line-clamp-2 leading-tight">
                  {video.title}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <span>{video.channelName}</span>
                  {video.verified && <CircleCheck className="h-3 w-3" />}
                </div>
                <p className="text-xs text-muted-foreground">
                  {video.views} 回視聴 · {video.publishedAt}
                </p>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="opacity-0 group-hover:opacity-100 h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted-foreground/10 shrink-0 transition-opacity"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
