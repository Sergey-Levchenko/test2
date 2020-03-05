export const getGenreName = val => {
  const genres = {
    0: "ACTION",
    1: "ADVENTURES",
    2: "COMEDY",
    3: "DRAMA",
    4: "HORROR",
    5: "WESTERNS"
  };
  return genres[val];
};
export const getLocaleDate = val => {
  return new Date(val).toLocaleString("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};
