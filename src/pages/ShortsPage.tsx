import { Flame } from "lucide-react"
import { shorts } from "@/data/shorts"

export function ShortsPage() {
  return (
    <div className="px-6 pb-8">
      <div className="flex items-center gap-2 py-4">
        <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
          <Flame className="h-5 w-5 text-white" fill="white" />
        </div>
        <h1 className="text-2xl font-bold">ショート</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {shorts.map((short) => (
          <div key={short.id} className="cursor-pointer group">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-muted">
              <img
                src={short.thumbnail}
                alt={short.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">
                  {short.views} 回視聴
                </p>
              </div>
            </div>
            <h3 className="mt-2 text-sm font-medium line-clamp-2 leading-tight">
              {short.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
