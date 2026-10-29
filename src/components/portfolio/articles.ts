const habit = { url: "/assets/articles/habit.webp" };
const introvert = { url: "/assets/articles/introvert.webp" };
const emma = { url: "/assets/articles/emma.webp" };
const journey = { url: "/assets/articles/journey.webp" };

export const ARTICLES = [
  { title: "Small Habits That Stick", description: "Why small, repeatable changes build lasting habits without overwhelming routines.", url: "https://mindsnotebook.com/smallest-habit-change-that-sticks/", image: habit.url, alt: "Original featured image of a young adult sitting in a softly lit room.", crop: "article-habit" },
  { title: "Being an Introvert", description: "Quiet strengths, meaningful connections, and the need for time alone.", url: "https://mindsnotebook.com/what-it-really-means-to-be-an-introvert/", image: introvert.url, alt: "Original featured illustration of a backpacked person looking out toward a mountain.", crop: "article-introvert" },
  { title: "Emma’s Journey to Self-Love", description: "Emma learns to embrace herself beyond bullying and body-image insecurities.", url: "https://mindsnotebook.com/becoming-beautiful-emmas-journey-to-self-love/", image: emma.url, alt: "Original featured illustration of a curly-haired woman wearing headphones.", crop: "article-emma" },
  { title: "Trust the Journey", description: "Let actions and time speak, without constantly explaining your worth.", url: "https://mindsnotebook.com/trust-the-journey-let-time-tell-your-story/", image: journey.url, alt: "Original featured illustration of a person beside a car overlooking a city at sunset.", crop: "article-journey" },
] as const;