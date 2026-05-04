import { Menu, Play, Search, Mic, Video, Bell } from "lucide-react"

export function Header() {
  return (
    <header className="h-14 sticky top-0 z-50 bg-white border-b flex items-center px-4 gap-4">
      <div className="flex items-center gap-4">
        <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
          <Menu className="h-6 w-6" />
        </button>
        <a href="/" className="flex items-center gap-0.5 shrink-0">
          <div className="w-[36px] h-[26px] bg-red-600 rounded-md flex items-center justify-center">
            <Play className="h-[14px] w-[14px]" fill="white" stroke="white" />
          </div>
          <span className="text-xl font-bold tracking-tight ml-1 text-foreground">
            YouTube
          </span>
          <sup className="text-[10px] text-muted-foreground -top-2.5 ml-px">
            JP
          </sup>
        </a>
      </div>

      <div className="flex flex-1 max-w-2xl mx-auto items-center">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="検索"
            className="flex-1 h-10 px-4 rounded-l-full border border-border bg-white text-sm outline-none focus:border-blue-500 focus:shadow-inner"
          />
          <button className="h-10 px-6 bg-muted rounded-r-full border border-l-0 border-border hover:bg-muted-foreground/10 transition-colors">
            <Search className="h-5 w-5 text-foreground" />
          </button>
        </div>
        <button className="h-10 w-10 rounded-full bg-muted ml-2 flex items-center justify-center hover:bg-muted-foreground/10 transition-colors shrink-0">
          <Mic className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
          <Video className="h-5 w-5" />
        </button>
        <button className="relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[10px] font-medium rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center leading-none">
            9+
          </span>
        </button>
        <button className="h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center ml-1">
          Y
        </button>
      </div>
    </header>
  )
}
