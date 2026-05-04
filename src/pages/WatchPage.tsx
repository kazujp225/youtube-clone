import { useState } from "react"
import { useParams } from "react-router-dom"
import { CircleCheck, Bell } from "lucide-react"
import { videos } from "@/data/videos"
import { VideoActions } from "@/components/watch/VideoActions"
import { Description } from "@/components/watch/Description"
import { CommentSection } from "@/components/watch/CommentSection"
import { RelatedVideos } from "@/components/watch/RelatedVideos"

export function WatchPage() {
  const { id } = useParams()
  const video = videos.find((v) => v.id === id) ?? videos[0]
  const relatedVideos = videos.filter((v) => v.id !== id).slice(0, 8)
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="px-6 py-4 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <div className="aspect-video bg-black rounded-xl overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-xl font-bold pt-3">{video.title}</h1>

          <div className="pt-3 flex flex-wrap justify-between gap-3 items-center">
            <div className="flex items-center gap-3">
              <img
                src={video.channelAvatar}
                alt={video.channelName}
                className="h-10 w-10 rounded-full bg-muted"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-medium text-sm">
                    {video.channelName}
                  </span>
                  {video.verified && (
                    <CircleCheck className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  登録者 120万人
                </p>
              </div>
              <button
                onClick={() => setSubscribed((prev) => !prev)}
                className={`rounded-full px-4 h-9 font-medium text-sm ml-2 transition-colors ${
                  subscribed
                    ? "bg-muted text-foreground flex items-center gap-1.5"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {subscribed ? (
                  <>
                    <Bell className="h-4 w-4" />
                    登録済み
                  </>
                ) : (
                  "チャンネル登録"
                )}
              </button>
            </div>

            <VideoActions />
          </div>

          <Description views={video.views} publishedAt={video.publishedAt} />

          <CommentSection />
        </div>

        <div className="lg:w-[400px] shrink-0">
          <RelatedVideos videos={relatedVideos} />
        </div>
      </div>
    </div>
  )
}
