let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"

let newUrl = decodeURIComponent(url)
function parseParam(url) {
  const queryString = url.split("?")[1]
  const params = new URLSearchParams(queryString)
  const parsedParams = {}
  for (let [key, value] of params.entries()) {
    let pattern = /^\d+$/
    if (value === "") {
      value = true
    } else if (pattern.test(value)) {
      value = Number(value)
    }
    if (parsedParams.hasOwnProperty(key)) {
      if (Array.isArray(parsedParams[key])) {
        parsedParams[key].push(value)
      } else {
        parsedParams[key] = [parsedParams[key], value]
      }
    } else {
      parsedParams[key] = value
    }
  }
  return parsedParams
}
console.log(parseParam(url))
