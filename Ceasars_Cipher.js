function rot13(str) {
  let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y', 'Z']

  var ans = ""
  str.split("").map(cur =>  {

    let n = alpha.indexOf(cur)
    n >= 13 ? ans += alpha[n-13] :
    n > -1 ? ans += alpha[n+13] : ans += cur
  })

  return ans;
}