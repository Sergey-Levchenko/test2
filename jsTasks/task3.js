const paramsString = "http://localhost:63342/test/index.html?em=world&ew=book".split('?')[1]
const searchParams = new URLSearchParams(paramsString);
const queryObj = {}
for (let p of searchParams) {
    queryObj[p[0]] = p[1];
}
console.log(queryObj);