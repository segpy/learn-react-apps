class GifMapper {
  static mapGifList (gifs) {
    return gifs.map((gif) => (
      new GifList(
        gif.id,
        gif.title,
        gif.images.fixed_width.webp
      )
    ))
  }
}

class GifList {
  constructor (id, title, url) {
    this.id = id
    this.title = title
    this.url = url
  }
}

export default GifMapper
