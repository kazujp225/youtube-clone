import { Link, useLocation } from "react-router-dom"
import {
  Home,
  Flame,
  Clapperboard,
  Library,
  History,
  PlaySquare,
  Clock,
  ThumbsUp,
  Download,
  ChevronRight,
  Music2,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast,
  Settings,
  Flag,
  HelpCircle,
  MessageSquareWarning,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { sidebarChannels } from "@/data/channels"

interface NavItemData {
  readonly icon: LucideIcon
  readonly label: string
  readonly href: string
}

const mainMenu: readonly NavItemData[] = [
  { icon: Home, label: "ホーム", href: "/" },
  { icon: Flame, label: "ショート", href: "/shorts" },
  { icon: Clapperboard, label: "登録チャンネル", href: "/subscriptions" },
  { icon: Library, label: "ライブラリ", href: "/library" },
]

const yourMenu: readonly NavItemData[] = [
  { icon: History, label: "履歴", href: "/history" },
  { icon: PlaySquare, label: "自分の動画", href: "/your-videos" },
  { icon: Clock, label: "後で見る", href: "/playlist/watch-later" },
  { icon: ThumbsUp, label: "高評価した動画", href: "/liked" },
  { icon: Download, label: "オフライン", href: "/offline" },
]

const exploreMenu: readonly NavItemData[] = [
  { icon: Music2, label: "YouTube Music", href: "/music" },
  { icon: Film, label: "映画", href: "/movies" },
  { icon: Gamepad2, label: "ゲーム", href: "/gaming" },
  { icon: Newspaper, label: "ニュース", href: "/news" },
  { icon: Trophy, label: "スポーツ", href: "/sports" },
  { icon: Lightbulb, label: "学び", href: "/learning" },
  { icon: Shirt, label: "ファッションと美容", href: "/fashion" },
  { icon: Podcast, label: "ポッドキャスト", href: "/podcasts" },
]

const settingsMenu: readonly NavItemData[] = [
  { icon: Settings, label: "設定", href: "/settings" },
  { icon: Flag, label: "報告履歴", href: "/reporthistory" },
  { icon: HelpCircle, label: "ヘルプ", href: "/help" },
  { icon: MessageSquareWarning, label: "フィードバックを送信", href: "/feedback" },
]

function SidebarNavItem({ item, active }: { item: NavItemData; active: boolean }) {
  return (
    <Link
      to={item.href}
      className={cn(
        "flex items-center gap-6 h-10 px-3 rounded-lg text-sm hover:bg-muted transition-colors",
        active && "bg-muted font-medium"
      )}
    >
      <item.icon className="h-5 w-5 shrink-0" />
      <span className="truncate">{item.label}</span>
    </Link>
  )
}

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto bg-white hidden md:block">
      <nav className="px-3 py-1.5">
        <div className="pb-3">
          {mainMenu.map((item) => (
            <SidebarNavItem
              key={item.href}
              item={item}
              active={location.pathname === item.href}
            />
          ))}
        </div>

        <div className="border-t pt-3 pb-3">
          <Link
            to="/you"
            className="flex items-center gap-1 px-3 py-2 text-base font-medium hover:text-foreground"
          >
            あなた <ChevronRight className="h-4 w-4" />
          </Link>
          {yourMenu.map((item) => (
            <SidebarNavItem
              key={item.href}
              item={item}
              active={location.pathname === item.href}
            />
          ))}
        </div>

        <div className="border-t pt-3 pb-3">
          <p className="px-3 py-2 text-base font-medium">登録チャンネル</p>
          {sidebarChannels.map((channel) => (
            <a
              key={channel.name}
              href="#"
              className="flex items-center gap-6 h-10 px-3 rounded-lg text-sm hover:bg-muted transition-colors"
            >
              <img
                src={channel.avatar}
                alt={channel.name}
                className="h-6 w-6 rounded-full shrink-0"
              />
              <span className="truncate">{channel.name}</span>
            </a>
          ))}
        </div>

        <div className="border-t pt-3 pb-3">
          <p className="px-3 py-2 text-base font-medium">YouTubeをもっと見る</p>
          {exploreMenu.map((item) => (
            <SidebarNavItem key={item.href} item={item} active={false} />
          ))}
        </div>

        <div className="border-t pt-3 pb-3">
          {settingsMenu.map((item) => (
            <SidebarNavItem key={item.href} item={item} active={false} />
          ))}
        </div>

        <div className="border-t pt-3 px-3 pb-4">
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-medium">
            {["概要", "プレス", "著作権", "お問い合わせ", "クリエイター", "広告", "開発者"].map(
              (link) => (
                <a key={link} href="#" className="hover:underline">
                  {link}
                </a>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-medium mt-3">
            {["利用規約", "プライバシー", "ポリシーと安全性", "YouTubeの仕組み", "新機能を試す"].map(
              (link) => (
                <a key={link} href="#" className="hover:underline">
                  {link}
                </a>
              )
            )}
          </div>
          <p className="mt-3 text-xs text-muted-foreground/70">© 2025 Google LLC</p>
        </div>
      </nav>
    </aside>
  )
}
