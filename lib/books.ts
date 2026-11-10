type Book = {
  slug: string
  title: string
  status: string
  availability: string
  cover: string
  description: string
  link: string | null
  cta: string
  width: number
  height: number
  alt: string
}

export const books: Book[] = [
  {
    slug: "a-mayflys-memory",
    title: "A Mayfly's Memory",
    status: "Published",
    availability: "Available on Amazon India",
    cover: "/a-mayflys-memory.jpeg",
    description:
      "A philosophical short novel about a blind mayfly named Susanth who spends years surviving in the dark depths of a lake. When he finally rises to the surface and learns to fly, he experiences freedom, love, and loss within the brief span of his life. Through his journey, the story explores themes of patience, resilience, connection, and the beauty of living fully even when life is short.",
    link: "https://amzn.in/d/01BTpnYV",
    cta: "Buy on Amazon",
    width: 1024,
    height: 1536,
    alt: "A Mayfly's Memory — book cover",
  },
  {
    slug: "epsalipm",
    title: "EPSALIPM",
    status: "Writing in progress",
    availability: "Coming soon",
    cover: "/epsalipm.jpeg",
    description:
      "A work in progress exploring memory, identity, and the ideas that shape who we become. Building on the philosophical voice of A Mayfly's Memory, it asks what it means to remember — and what is lost and found when we look back.",
    link: "https://instagram.com/sanjay.hq/",
    cta: "Follow for updates",
    width: 900,
    height: 1600,
    alt: "EPSALIPM — book cover",
  },
  {
    slug: "what-i-saw-when-i-was-a-kid",
    title: "What I Saw When I Was a Kid",
    status: "Published",
    availability: "Open Community Book",
    cover: "/books/what-i-saw-when-i-was-a-kid.png",
    description:
      "A journey through the world as seen through a child's eyes, exploring childhood memories, imagination, innocence and the little things that make life meaningful.",
    link: "https://endless-book-tan.vercel.app/",
    cta: "Read the Community Book",
    width: 512,
    height: 800,
    alt: "What I Saw When I Was a Kid — illustrated children's book cover by Sanjay S.",
  },
  {
    slug: "why-men-walk-so-far",
    title: "Why Men Walk So Far",
    status: "Writing in progress",
    availability: "Personal Writing / Essay",
    cover: "/why-men-walk-so-far.png",
    description:
      "We spend our lives chasing something — money, success, freedom, recognition, a better future. This book explores the choices we make, the ambitions that drive us, and the sacrifices hidden behind the lives we build. Different paths. Different dreams. One question that deserves to be asked: what are we really chasing?",
    link: null,
    cta: "Follow the Writing Journey",
    width: 768,
    height: 1365,
    alt: "Why Men Walk So Far — book cover showing a person walking towards a sunset.",
  },
]
