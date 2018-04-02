const data = [
  {
    id: Date.now(),
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    id: Date.now() + 1,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    id: Date.now() + 2,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  }
]

const timeout = 500

export const Post = {
  list() {
    return new Promise(resolve => {
      setTimeout(() => resolve(data), timeout)
    })
  },
  get(id) {
    return new Promise(resolve => {
      setTimeout(()=> {
        resolve(
          data.filter(post => post.id == id)[0]
        )
      }, timeout)
    })
  },
  create(text) {
    return new Promise(resolve => {
      setTimeout(() => {
        data.push({id: Date.now(), text})
        resolve()
      }, timeout)
    })
  },
  remove() {

  }
}
