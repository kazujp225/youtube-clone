# YouTube Clone

## 概要
本物のYouTubeのUI/UXをそっくりに再現するフロントエンドアプリ。色味・余白・配置・ホバー挙動・モバイル底部ナビまで本物と同じ見た目を目指す。「YouTubeっぽい」ではなく「本物と並べて見ても見分けがつかない」レベルを目標にする。

## 技術スタック
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- lucide-react（全アイコンはここから import。独自SVGや絵文字で代用しない）
- react-router-dom（ページ遷移）

## 共通レイアウト

### ヘッダー（高さ56px, sticky top-0, 白背景, 下にボーダー, z-50）
- 左ブロック（gap-4, items-center）:
  - Menu アイコン（ハンバーガー、h-10 w-10 rounded-full hover:bg-muted）
  - YouTubeロゴ: 横長の赤い角丸長方形 幅36px×高さ26px・rounded-md・bg-red-600・中央に白い Play アイコン(fill="white")。その右に黒ボールドの "YouTube" 文字（text-xl font-bold tracking-tight）+ 右上にスーパースクリプトで「JP」(text-xs text-muted-foreground)。縦横比約1.4:1の横長で絶対に正方形にしない
- 中央ブロック（max-w-2xl, mx-auto, flex-1）:
  - 検索input（rounded-l-full, border, px-4, h-10, placeholder="検索"）
  - Search ボタン（rounded-r-full, bg-muted, px-6, h-10, border-l-0, hover:bg-muted-foreground/10）
  - Mic ボタン（h-10 w-10 rounded-full bg-muted ml-2 hover:bg-muted-foreground/10）
- 右ブロック（gap-2, items-center）:
  - Video アイコンボタン（動画作成）
  - Bell アイコンボタン（通知、右上に赤い丸でnumberバッジ "9+"）
  - 丸いユーザーアバター（h-8 w-8 rounded-full bg-blue-500 text-white、頭文字"Y"を中央配置）

### サイドバー（幅240px, 白背景, sticky, /watch/* 以外で表示）
本物のYouTubeのサイドバーは複数セクションに分かれている。各セクション間にborder-t区切り線を入れる:

1. 【メインメニュー】
   - Home（ホーム、選択中=bg-muted+font-medium）
   - Flame（ショート、Zapではなく炎アイコン）
   - Clapperboard（登録チャンネル）
   - Library（ライブラリ）

2. 【あなた >】見出し（font-medium px-3 py-2、ChevronRight 付き）
   - History（履歴）
   - PlaySquare（自分の動画）
   - Clock（後で見る）
   - ThumbsUp（高評価した動画）
   - Download（オフライン）

3. 【登録チャンネル】見出し
   - チャンネルアバター(h-6 w-6 rounded-full)+チャンネル名 を5件（ダミー、ui-avatars.comで生成）

4. 【YouTubeをもっと見る】見出し
   - Music2（YouTube Music）/ Film（映画）/ Gamepad2（ゲーム）/ Newspaper（ニュース）/ Trophy（スポーツ）/ Lightbulb（学び）/ Shirt（ファッションと美容）/ Podcast（ポッドキャスト）

5. Settings（設定）/ Flag（報告履歴）/ HelpCircle（ヘルプ）/ MessageSquareWarning（フィードバックを送信）

6. フッター（px-3 pb-4, text-xs text-muted-foreground, gap-y-1）:
   - リンク群: 概要・プレス・著作権・お問い合わせ・クリエイター・広告・開発者（小さい灰色文字、改行なしで wrap）
   - リンク群2: 利用規約・プライバシー・ポリシーと安全性・YouTubeの仕組み・新機能を試す
   - 「© 2025 Google LLC」（mt-3, text-xs text-muted-foreground/70）

各メニュー項目: h-10 px-3 rounded-lg、ホバーでbg-muted、選択中=bg-muted+font-medium、アイコンとテキストの間にgap-6、text-sm

### モバイル底部ナビ（md:hidden, fixed bottom-0 inset-x-0, h-14, border-t, bg-white, z-40）
本物のYouTubeアプリの底部ナビと完全一致:
- Home（ホーム）
- Flame（ショート）
- 中央の Plus Circle ボタン（h-14 w-14, 円形、グレー、中央に大きい+アイコン）
- Clapperboard（登録チャンネル）
- UserCircle（マイページ）
各タブ: flex-1, flex-col items-center, py-2, gap-1, text-xs。アクティブタブはアイコン塗りつぶし+ラベル太字

## 画面構成

### ホーム（/）
- 上部: カテゴリチップを横スクロール一列（gap-3, py-3, overflow-x-auto, scrollbar-hide）。チップ20種:
  すべて / 音楽 / ライブ / ゲーム / ニュース / 料理 / スポーツ / レシピ / Vlog / プログラミング / 映画 / コメディ / インタビュー / ポッドキャスト / 最近アップロードされた動画 / 視聴済み / 新着動画 / 美容 / 動物 / DIY
  - 「すべて」は bg-foreground text-background で選択状態、他は bg-muted text-foreground
  - チップサイズ: px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap
- 下部: 動画カード12枚のグリッド（lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1, gap-x-4 gap-y-8）
  - 動画カード（cursor-pointer, group）:
    - サムネイル: aspect-video rounded-xl overflow-hidden、右下に動画時間バッジ（absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded）
    - 下にflex gap-3 pt-3:
      - 左: チャンネルアバター（h-9 w-9 rounded-full）
      - 右（flex-1, min-w-0）:
        - タイトル（font-medium text-base line-clamp-2 leading-tight）
        - チャンネル名行（mt-1 flex items-center gap-1）: text-sm text-muted-foreground hover:text-foreground + CircleCheck アイコン(h-3.5 w-3.5)で認証マーク
        - 再生回数と投稿日（text-sm text-muted-foreground）「123万 回視聴 · 3日前」（中点で区切り）
    - ホバーでサムネが微かに拡大（group-hover:scale-[1.02] transition-transform）

### ショート（/shorts）
- 上部に「ショート」見出し+赤いショートロゴ
- 縦長カードを4列グリッド（lg:grid-cols-4 md:grid-cols-3 grid-cols-2, gap-4）
- 各カード: aspect-[9/16] rounded-xl + サムネ右下に「再生回数」白文字+ サムネ下にタイトル(2行省略)、ダミー12件

### 登録チャンネル（/subscriptions）
- 上部: 全チャンネルのアバターを横スクロールで表示（h-12 w-12 rounded-full）
- 「今日」「昨日」「今週」「今月」のセクション見出し（text-lg font-medium）
- 各セクションにホーム画面と同じ縦カード4列、ダミー10件

### 履歴（/history）
- 左カラム（メイン、最大幅900px）+ 右カラム（サイドナビ、widht 300px、PC のみ「履歴データの種類」サブメニュー）
- 上部に検索バー「再生履歴を検索」（rounded-full, bg-muted, px-4 h-10）
- 「今日」「昨日」「先週」のセクション見出し
- 各セクションに横長カード（gap-3 py-3）: 左サムネ大(w-60 aspect-video rounded-xl 右下に動画時間) + 右にタイトル(text-base font-medium 2行省略)・チャンネル名(text-sm text-muted-foreground 認証マーク付き)・再生回数 · 投稿日・概要(text-sm 1行省略)・「⋮」MoreVertical メニュー、ダミー10件

### 後で見る（/playlist/watch-later）
- 左ペイン（幅400px sticky top-20）: プレイリストヘッダー
  - サムネモザイク（4枚タイル組み合わせ）または1枚の大きいサムネ
  - 「後で見る」タイトル（text-2xl font-bold）
  - ユーザー名 + 動画数 + 「すべて再生」（黒背景白文字 rounded-full）「シャッフル」ボタン
- 右ペイン: 番号付き横長カード形式の動画リスト（番号(w-8 text-center text-muted-foreground) + 横長カード）、ダミー10件

### 動画視聴（/watch/:id）— サイドバー非表示、ヘッダーのみ
2カラム（PC: 左 max-w-[1280px] flex gap-6, 動画エリア flex-1, 関連動画 w-[400px]、モバイル: flex-col）

#### 左カラム（動画＋情報）
1. 動画プレーヤー: aspect-video bg-black rounded-xl overflow-hidden
2. タイトル: text-xl font-bold pt-3
3. チャンネル行（pt-3 flex flex-wrap justify-between gap-3）:
   - 左ブロック（flex items-center gap-3）:
     - チャンネルアバター（h-10 w-10 rounded-full）
     - チャンネル情報: チャンネル名（font-medium、認証マークCircleCheck付き）+ 「登録者 120万人」（text-xs text-muted-foreground）
     - チャンネル登録ボタン（bg-foreground text-background rounded-full px-4 h-9 font-medium）→ 登録済みは bg-muted text-foreground + Bell アイコン + 「登録済み」
   - 右ブロック（flex items-center gap-2）:
     - 高評価/低評価 pill（bg-muted rounded-full flex items-center, h-9）: 左セル[ThumbsUp + 「1.2万」 px-4]+縦のセパレーター(h-6 w-px bg-border)+右セル[ThumbsDown px-4]、各セル hover:bg-muted-foreground/10
     - 共有ボタン: bg-muted rounded-full px-4 h-9 flex items-center gap-1.5 (Share2 + 「共有」)
     - ダウンロードボタン: bg-muted rounded-full px-4 h-9 flex items-center gap-1.5 (Download + 「保存」)
     - ⋮ メニュー: bg-muted rounded-full h-9 w-9 (MoreHorizontal)
4. 概要欄（mt-3 bg-muted rounded-xl px-3 py-3 cursor-pointer）:
   - 1行目: 「45万 回視聴 · 3日前」+ ハッシュタグを青色（text-primary or text-blue-700）「#プログラミング #初心者」（font-medium）
   - 説明文（line-clamp-3 default、whitespace-pre-line）
   - 末尾: 「もっと見る」(font-medium 太字)、展開時は全文+末尾に「一部を表示」
5. コメント欄（mt-6）:
   - 見出し行: 「120 件のコメント」(font-bold) + 並べ替えボタン(ListFilter + 「並べ替え」)
   - 入力エリア（mt-4 flex gap-3）: 自分のアバター(h-10 w-10) + flex-1 に下線ボーダーのみのinput「コメントを追加..."」
   - 入力時に下に「キャンセル」(無背景) 「コメント」(青背景=bg-blue-500、入力空ならbg-muted disabled) ボタン表示
   - ダミーコメント5件（mt-6 space-y-6）: 各 flex gap-3
     - アバター(h-10 w-10)
     - 本文ブロック:
       - ヘッダー: @username · 3日前 (text-xs text-muted-foreground)
       - 本文（whitespace-pre-line text-sm）
       - フッター（pt-1 flex items-center gap-2 text-xs）: ThumbsUp(h-4 w-4) + 数字 + ThumbsDown + MessageSquare(返信ボタン rounded-full px-3 h-7)

#### 右カラム（関連動画）
- 上部タブ（横スクロール、border-b）: 「すべて」「あなたへのおすすめ」「最近アップロード」「視聴済み」（px-3 py-1.5 rounded-lg、選択中はbg-foreground text-background）
- 関連動画8件（縦リスト、space-y-2）:
  - 各カード: flex gap-2 cursor-pointer
    - 左サムネ（w-40 aspect-video rounded-lg overflow-hidden、右下に動画時間バッジ）
    - 右側（flex-1 min-w-0）:
      - タイトル（font-medium text-sm line-clamp-2）
      - チャンネル名（mt-1 text-xs text-muted-foreground 認証マーク付き）
      - 再生回数 · 投稿日（text-xs text-muted-foreground）
      - ⋮ メニュー（ホバー時のみ表示、絶対配置 right-0 top-0）

## デザインルール
- テーマカラー: 赤（#FF0000、YouTubeと同じ）。globals.cssの--primaryをこの色に
- 背景: 白(#ffffff)、サブ背景はbg-muted(#F2F2F2)
- カード: rounded-xl、ホバーで scale-[1.02] transition
- ボタン: pill (rounded-full) を多用、ヘッダーアイコンは丸ホバー
- 文字: text-foreground=#0F0F0F、サブ=text-muted-foreground=#606060
- フォント: -apple-system, "Roboto", Arial, sans-serif、数字はtabular-nums
- アイコンは全て lucide-react、独自SVG禁止
- モバイル（375px）: カード1列、サイドバー→ハンバーガーオーバーレイ、底部ナビ表示、ヘッダーは検索アイコンに折りたたみ

## データ
- ダミーデータはリアルな日本語タイトルで固定配列、API接続不要
- チャンネルアバター: https://ui-avatars.com/api/?name=チャンネル名&background=random&size=72
- サムネイル: https://picsum.photos/seed/v1/640/360 〜 v12 まで
- 認証マークはランダムで30%のチャンネルに付与
