import { Link } from "react-router-dom"
import { CircleCheck } from "lucide-react"
import type { Video } from "@/data/videos"

interface VideoCardProps {
  readonly video: Video
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/watch/${video.id}`} className="cursor-pointer group block">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex gap-3 pt-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className="h-9 w-9 rounded-full shrink-0 bg-muted"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2 leading-tight text-foreground">
            {video.title}
          </h3>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-sm text-muted-foreground hover:text-foreground truncate">
              {video.channelName}
            </span>
            {video.verified && (
              <CircleCheck className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground tabular-nums">
            {video.views} 回視聴 · {video.publishedAt}
          </p>
        </div>
      </div>
    </Link>
  )
}
