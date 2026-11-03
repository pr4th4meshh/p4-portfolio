// Shared by GithubContributions.astro: rendered at build time, then
// refreshed in the browser so the graph stays current between deploys.

export type Day = { date: string; count: number; level: number }
export type Contributions = { days: Day[]; total: number }

export const USERNAME = "pr4th4meshh"
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`

// Grayscale replacement for GitHub's green scale — index === contribution level
export const LEVEL_COLORS = ["#18181b", "#3f3f46", "#71717a", "#a1a1aa", "#e4e4e7"]
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const fetchContributions = async (): Promise<Contributions> => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error(`contributions API: ${res.status} ${res.statusText}`)
  const json = await res.json()
  return { days: json.contributions ?? [], total: json.total?.lastYear ?? 0 }
}

// Chop a flat day list into calendar weeks (columns), padding the first
// week so the grid always starts on a Sunday row.
export const toWeeks = (days: Day[]) => {
  if (!days.length) return []
  const weeks: (Day | null)[][] = []
  let current: (Day | null)[] = new Array(new Date(days[0].date).getUTCDay()).fill(null)
  for (const day of days) {
    current.push(day)
    if (current.length === 7) {
      weeks.push(current)
      current = []
    }
  }
  if (current.length) weeks.push([...current, ...new Array(7 - current.length).fill(null)])
  return weeks
}

// Label for each week column: the month name where a new month starts, else null.
export const monthLabels = (weeks: (Day | null)[][]) =>
  weeks.map((week, i) => {
    const first = week.find(Boolean)
    if (!first) return null
    const month = new Date(first.date).getUTCMonth()
    const prevFirst = weeks[i - 1]?.find(Boolean)
    const prevMonth = prevFirst && new Date(prevFirst.date).getUTCMonth()
    return i === 0 || month !== prevMonth ? MONTH_LABELS[month] : null
  })

export const cellColor = (day: Day) => LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]

export const cellTitle = (day: Day) => {
  const date = new Date(day.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
  return `${day.count} contribution${day.count === 1 ? "" : "s"} on ${date}`
}

export const totalLabel = (total: number) => `${total.toLocaleString("en-US")} contributions in the last year`

// Cheap fingerprint to tell whether fresh data differs from what's rendered.
export const signature = ({ days, total }: Contributions) => `${total}:${days.at(-1)?.date ?? ""}:${days.length}`
