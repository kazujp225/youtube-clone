import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreHorizontal,
} from "lucide-react"

export function VideoActions() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="bg-muted rounded-full flex items-center h-9">
        <button className="flex items-center gap-1.5 px-4 h-full rounded-l-full hover:bg-muted-foreground/10 transition-colors">
          <ThumbsUp className="h-5 w-5" />
          <span className="text-sm font-medium">1.2万</span>
        </button>
        <div className="h-6 w-px bg-border" />
        <button className="flex items-center px-4 h-full rounded-r-full hover:bg-muted-foreground/10 transition-colors">
          <ThumbsDown className="h-5 w-5" />
        </button>
      </div>

      <button className="bg-muted rounded-full px-4 h-9 flex items-center gap-1.5 text-sm font-medium hover:bg-muted-foreground/10 transition-colors">
        <Share2 className="h-5 w-5" />
        共有
      </button>

      <button className="bg-muted rounded-full px-4 h-9 flex items-center gap-1.5 text-sm font-medium hover:bg-muted-foreground/10 transition-colors">
        <Download className="h-5 w-5" />
        保存
      </button>

      <button className="bg-muted rounded-full h-9 w-9 flex items-center justify-center hover:bg-muted-foreground/10 transition-colors">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  )
}
