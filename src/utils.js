export const RegexDate = (data) => {
  const regex = /^(\D+\s\D+\s\d+\s\d+).+/gm
  return data.toString().replace(regex, ($1, $2) => $2)
}
