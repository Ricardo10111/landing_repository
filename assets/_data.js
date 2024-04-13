export const giveMeData = async () => {
  const API = 'https://rickandmortyapi.com/api/character'

  const responce = await fetch(API)
    .then((resp) => resp.json())
    .then((data) => data.results)

  return responce
}
