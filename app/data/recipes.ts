
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "classic-burger",
    title: "Classic Burger",
    emoji: "🍔",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "creamy-pasta",
    title: "Creamy Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian",
  },
  {
    id: "fresh-sushi",
    title: "Fresh Sushi",
    emoji: "🍣",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
  },
  {
    id: "pancakes",
    title: "Fluffy Pancakes",
    emoji: "🥞",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "tacos",
    title: "Mexican Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
  },
];
