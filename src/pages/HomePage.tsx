import { CategoryChips } from "@/components/home/CategoryChips"
import { VideoGrid } from "@/components/home/VideoGrid"

export function HomePage() {
  return (
    <div className="px-6 pb-8">
      <CategoryChips />
      <VideoGrid />
    </div>
  )
}
