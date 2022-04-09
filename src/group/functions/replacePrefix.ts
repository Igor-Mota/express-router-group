export function replacePrefix(string: string) {
  let replacePrefix = string

  if (string === "/") replacePrefix = replacePrefix.replace("/", "").trim()

  let prefixArray = replacePrefix.split("")
  if (prefixArray[0] === "/") {
    prefixArray.shift()
  }
  replacePrefix = prefixArray.join()
  replacePrefix = replacePrefix.replace(/,/g, "")

  return replacePrefix
}
