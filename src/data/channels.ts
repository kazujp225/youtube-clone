export interface Channel {
  readonly name: string
  readonly avatar: string
}

export const sidebarChannels: readonly Channel[] = [
  {
    name: "プログラミングTV",
    avatar: "https://ui-avatars.com/api/?name=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TV&background=random&size=72",
  },
  {
    name: "旅するカメラマン",
    avatar: "https://ui-avatars.com/api/?name=%E6%97%85%E3%81%99%E3%82%8B%E3%82%AB%E3%83%A1%E3%83%A9%E3%83%9E%E3%83%B3&background=random&size=72",
  },
  {
    name: "シェフの台所",
    avatar: "https://ui-avatars.com/api/?name=%E3%82%B7%E3%82%A7%E3%83%95%E3%81%AE%E5%8F%B0%E6%89%80&background=random&size=72",
  },
  {
    name: "テックレビュー",
    avatar: "https://ui-avatars.com/api/?name=%E3%83%86%E3%83%83%E3%82%AF%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC&background=random&size=72",
  },
  {
    name: "ねこぐらし",
    avatar: "https://ui-avatars.com/api/?name=%E3%81%AD%E3%81%93%E3%81%90%E3%82%89%E3%81%97&background=random&size=72",
  },
]
