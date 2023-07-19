import { useEffect, useState } from 'react'
import { apiNews } from '../mock_api/news'
import { type ReportData } from '../types'

export function useData (id: number): ReportData {
  const [report, setReport] = useState<ReportData>(
    {
      id: 0,
      title: '',
      image: '',
      date: '',
      info: ''
    }
  )

  useEffect(() => {
    if (id !== undefined) {
      const findedReport = apiNews.find((element) => element.id === id)
      findedReport !== undefined && setReport(findedReport)
    }
  }, [id])

  return {
    id: report?.id,
    title: report?.title,
    image: report?.image,
    date: report?.date,
    info: report?.info
  }
}
