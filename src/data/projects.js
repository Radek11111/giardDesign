export const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[3/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
];

export const allProjects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  img: `${import.meta.env.BASE_URL}gallery/gallery-${i + 1}.png`,
}));
