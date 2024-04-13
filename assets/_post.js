import { giveMeData } from './_data.js'
export const post = async (principalContainer) => {
  const dataPost = await giveMeData()
  dataPost.forEach((element) => {
    const mainContainer = principalContainer
    const divFactory = (
      classN,
      contentNew = '',
      contentNew2 = '',
      contentNew3 = '',
      contentNew4 = '',
      contentNew5 = ''
    ) => {
      const div = document.createElement('div')
      div.classList.add(classN)
      div.append(contentNew, contentNew2, contentNew3, contentNew4, contentNew5)
      return div
    }
    const pFactory = (classN, textContenctN) => {
      const p = document.createElement('p')
      p.classList.add(classN)
      p.textContent = textContenctN
      return p
    }
    const imgFactory = (classN, srcN) => {
      const img = document.createElement('img')
      img.classList.add(classN)
      img.src = srcN
      return img
    }
    const aFactory = (classN, hrefN, info) => {
      const a = document.createElement('a')
      a.classList.add(classN)
      a.href = hrefN
      a.textContent = info
      return a
    }

    mainContainer.appendChild(
      divFactory(
        'card',
        imgFactory('card-img', element.image),

        divFactory(
          'card-content',
          pFactory('card-name', `Name: ${element.name}`),
          pFactory('card-specie', `Specie: ${element.species}`),
          pFactory('card-status', `Status: ${element.status}`),
          pFactory('card-origin', `origin: ${element.origin.name}`),
          aFactory('card-link', element.location.url, 'More info')
        )
      )
    )
  })
}
