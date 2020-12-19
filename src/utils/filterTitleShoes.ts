
export const filterTitleShoes = (title: string): string => {
  if (title.length < 27) {
    return title
  }

  return `${title.substring(0, 20)}...`
}