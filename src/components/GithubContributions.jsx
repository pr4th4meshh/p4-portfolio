import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const USERNAME = "pr4th4meshh"
const PROFILE_URL = `https://github.com/${USERNAME}`

// Grayscale replacement for GitHub's green scale — index === contribution level
const LEVEL_COLORS = ["#18181b", "#3f3f46", "#71717a", "#a1a1aa", "#e4e4e7"]

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""]
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

// Chop a flat day list into calendar weeks (columns), padding the first
// week so the grid always starts on a Sunday row.
const toWeeks = (days) => {
  if (!days.length) return []

  const weeks = []
  let current = new Array(new Date(days[0].date).getUTCDay()).fill(null)

  days.forEach((day) => {
    current.push(day)
    if (current.length === 7) {
      weeks.push(current)
      current = []
    }
  })

  if (current.length) {
    weeks.push([...current, ...new Array(7 - current.length).fill(null)])
  }

  return weeks
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })

const GithubContributions = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const weeks = toWeeks(data?.contributions ?? [])
  const total = data?.total?.lastYear ?? 0

  return (
    <section className="bg-primary pt-24 pb-10" id="contributions">
      <div className="container mx-auto">
        <div className="flex flex-col ss:flex-row ss:items-end ss:justify-between gap-2 mb-12">
          <h1 className="text-2xl font-bold uppercase tracking-wide font-pop text-white">
            contributions
          </h1>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-xs font-pop uppercase tracking-widest cursor-none"
          >
            @{USERNAME} &#8599;
          </a>
        </div>

        {error ? (
          <p className="text-gray-500 font-pop text-sm">
            Could not load contributions right now —{" "}
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline cursor-none"
            >
              view them on GitHub
            </a>
            .
          </p>
        ) : (
          <>
            <div className="overflow-x-auto pb-2">
              {/* Cells are fluid (flex-1 + aspect-square) so the grid spans the
                  full container width; min-w keeps them legible and scrollable
                  on narrow screens. */}
              <div className="flex gap-2 w-full min-w-[620px]">
                {/* weekday gutter */}
                <div className="flex flex-col gap-[3px] pt-[18px] shrink-0 w-6">
                  {DAY_LABELS.map((label, i) => (
                    <span
                      key={i}
                      className="flex-1 flex items-center text-[9px] leading-none text-gray-500 font-pop"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex-1 min-w-0">
                  {/* month ruler — label sits above the week a new month starts in */}
                  <div className="flex gap-[3px] h-[18px]">
                    {weeks.map((week, i) => {
                      const first = week.find(Boolean)
                      const prevFirst = weeks[i - 1]?.find(Boolean)
                      const month = first && new Date(first.date).getUTCMonth()
                      const prevMonth =
                        prevFirst && new Date(prevFirst.date).getUTCMonth()
                      const showLabel = first && (i === 0 || month !== prevMonth)

                      return (
                        <span
                          key={i}
                          className="flex-1 text-[9px] leading-none text-gray-500 font-pop relative"
                        >
                          {showLabel && (
                            <span className="absolute left-0 top-0 whitespace-nowrap">
                              {MONTH_LABELS[month]}
                            </span>
                          )}
                        </span>
                      )
                    })}
                  </div>

                  {/* the grid itself */}
                  <div className="flex gap-[3px]">
                    {weeks.map((week, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="flex-1 flex flex-col gap-[3px]"
                      >
                        {week.map((day, dayIndex) =>
                          day ? (
                            <motion.div
                              key={day.date}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: Math.min(weekIndex * 0.008, 0.5),
                              }}
                              className="w-full aspect-square rounded-[2px]"
                              style={{
                                backgroundColor: LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                                outline: "1px solid rgba(255,255,255,0.04)",
                                outlineOffset: "-1px",
                              }}
                              title={`${day.count} contribution${
                                day.count === 1 ? "" : "s"
                              } on ${formatDate(day.date)}`}
                            />
                          ) : (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className="w-full aspect-square"
                            />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ss:flex-row ss:items-center ss:justify-center gap-3 ss:gap-6 mt-6">
              <p className="text-gray-400 text-xs font-pop uppercase tracking-widest">
                {data
                  ? `${total.toLocaleString()} contributions in the last year`
                  : "loading…"}
              </p>

              <div className="flex items-center gap-[3px]">
                <span className="text-gray-500 text-[10px] font-pop mr-1">
                  Less
                </span>
                {LEVEL_COLORS.map((color) => (
                  <span
                    key={color}
                    className="w-[11px] h-[11px] rounded-[2px]"
                    style={{
                      backgroundColor: color,
                      outline: "1px solid rgba(255,255,255,0.04)",
                      outlineOffset: "-1px",
                    }}
                  />
                ))}
                <span className="text-gray-500 text-[10px] font-pop ml-1">
                  More
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default GithubContributions
