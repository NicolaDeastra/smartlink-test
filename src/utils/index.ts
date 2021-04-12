export function totalKehadiran(nominal: number, kehadiran: number) {
  return formatNumber(nominal * kehadiran)
}

export function formatNumber(num: number | undefined) {
  if (num) return Intl.NumberFormat('id-Id').format(num)
  return
}

export function formatDate(date: string) {
  const newDate = new Date(date)
  return newDate.toDateString()
}
