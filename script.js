function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a img light
    img.setAttribute("src", "./assets/avatarjhonii-light.png")
  } else {
    // se tiver sem loight mode, manter a imgem normal
    img.setAttribute("src", "./assets/avatarjhonii.png")
  }
}
