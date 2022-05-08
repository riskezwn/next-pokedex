import { pokeApi } from '../api'
import { PokemonFull } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`)

    return {
      name: data.name,
      id: data.id,
      image: data.sprites.other?.home.front_default,
      sprites: {
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
        front_shiny: data.sprites.front_shiny,
        back_shiny: data.sprites.back_shiny
      },
      types: data.types,
      stats: [
        { label: 'HP', value: data.stats[0].base_stat },
        { label: 'Attack', value: data.stats[1].base_stat },
        { label: 'Defense', value: data.stats[2].base_stat },
        { label: 'Special Attack', value: data.stats[3].base_stat },
        { label: 'Special Defense', value: data.stats[4].base_stat },
        { label: 'Speed', value: data.stats[5].base_stat }
      ]
    }
  } catch (error) {
    return null
  }
}
