export const SPECIALS = [
  {
    letter: "S",
    trigram: "FOR",
    title: "Force"
  },
  {
    letter: "P",
    trigram: "PER",
    title: "Perception"
  },
  {
    letter: "E",
    trigram: "END",
    title: "Endurance"
  },
  {
    letter: "C",
    trigram: "CHR",
    title: "Charisme"
  },
  {
    letter: "I",
    trigram: "INT",
    title: "Inteligence"
  },
  {
    letter: "A",
    trigram: "AGL",
    title: "Agilite"
  },
  {
    letter: "L",
    trigram: "CHA",
    title: "Chance"
  }
]

const computedSelectableSpecial = (specials) => {
  return SPECIALS.map(special => ({
    value: special.trigram,
    label: special.title
  }))
}

export const SELECTABLE_SPECIALS = computedSelectableSpecial(SPECIALS)
