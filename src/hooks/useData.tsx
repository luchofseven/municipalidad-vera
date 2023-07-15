import { useEffect, useState } from 'react'
import { apiNews } from '../mock_api/news'
import { type ReportData } from '../types'

interface Report {
  report?: ReportData
}

export function useData (id: number): Report {
  const [report, setReport] = useState<ReportData>()

  useEffect(() => {
    if (id !== undefined) {
      const findedReport = apiNews.find((element) => element.id === id)
      findedReport !== undefined && setReport(findedReport)
    }
  }, [id])

  return { report }
}
