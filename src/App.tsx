import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { ShortsPage } from "@/pages/ShortsPage"
import { SubscriptionsPage } from "@/pages/SubscriptionsPage"
import { HistoryPage } from "@/pages/HistoryPage"
import { WatchLaterPage } from "@/pages/WatchLaterPage"
import { WatchPage } from "@/pages/WatchPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/playlist/watch-later" element={<WatchLaterPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
