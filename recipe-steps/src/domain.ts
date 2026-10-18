export type DomainRecord = {
  id: string;
  title: string;
  subtitle: string;
  /** ISO point in time the recipe was last cooked. */
  timestamp: string;
  steps: string[];
  /** Index of the current step; equals steps.length when every step is done. */
  progress: number;
};

export const initialRecords: DomainRecord[] = [
  {
    id: 'pancakes',
    title: 'Pancakes',
    subtitle: '20 min',
    timestamp: '2026-10-12T09:15:00Z',
    steps: [
      'Whisk 1 cup flour, 1 tbsp sugar, 2 tsp baking powder and a pinch of salt.',
      'In another bowl, beat 1 egg with 1 cup milk and 2 tbsp melted butter.',
      'Pour the wet mix into the dry mix and stir until just combined. Lumps are fine.',
      'Heat a lightly oiled pan over medium heat.',
      'Pour 1/4 cup batter per pancake. Flip when bubbles form, about 2 minutes.',
      'Cook the second side for 1 minute until golden, then serve warm.',
    ],
    progress: 0,
  },
  {
    id: 'omelette',
    title: 'Omelette',
    subtitle: '10 min',
    timestamp: '2026-10-16T08:00:00Z',
    steps: [
      'Beat 3 eggs with a pinch of salt until no streaks remain.',
      'Melt 1 tbsp butter in a nonstick pan over medium-low heat.',
      'Pour in the eggs and stir gently until softly set at the edges.',
      'Scatter cheese or fillings over one half.',
      'Fold the omelette in half and slide it onto a plate.',
    ],
    progress: 0,
  },
  {
    id: 'fried-rice',
    title: 'Fried rice',
    subtitle: '25 min',
    timestamp: '2026-10-09T18:30:00Z',
    steps: [
      'Dice 1 onion, 2 green onions and 1 carrot. Beat 2 eggs.',
      'Scramble the eggs in a hot oiled wok, then set them aside.',
      'Stir-fry the onion and carrot for 3 minutes.',
      'Add 3 cups cold cooked rice and fry, pressing flat, for 4 minutes.',
      'Add 2 tbsp soy sauce and 1 tsp sesame oil, then toss well.',
      'Fold the eggs and green onions back in and serve.',
    ],
    progress: 0,
  },
  {
    id: 'guacamole',
    title: 'Guacamole',
    subtitle: '10 min',
    timestamp: '2026-10-04T19:00:00Z',
    steps: [
      'Halve and pit 3 ripe avocados, then scoop them into a bowl.',
      'Mash with a fork, leaving some chunks.',
      'Stir in 1/4 diced onion, 1 chopped tomato and a handful of cilantro.',
      'Season with juice of 1 lime and 1/2 tsp salt. Taste and adjust.',
    ],
    progress: 0,
  },
];

const monthDay = new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'});

export function formatPointInTime(timestamp: string): string {
  return monthDay.format(new Date(timestamp));
}
