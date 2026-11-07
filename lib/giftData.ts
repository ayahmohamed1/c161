export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Let's continue our lives together and always make it beautiful🤍.",
  "I will hug you and kiss you until I've had enough of you🤍.",
  "Let's take lots of pictures and travel together to all places🤍.",
  "Let's grow old together while loving each other more every day🤍.",

];

export const defaultLoveLetterParagraphs: string[] = [
  "Loving you is the easiest and most beautiful thing that has ever happened to me in my life.",
  "You are my safe place, my warmth, and the only person I can truly be myself with.",
  "Every time I see you, it feels like the first time, with the same excitement and the same love always.",
  "I love the man you are; I love your pure heart, your eyes, your comforting voice, and your sweet smile.",
  "I will always choose you at all times, through all the easy and hard days.",
  "I will always stay with you, I will always love you, always and forever.♥️",
];

const ahmedGift: GiftData = {
  senderName: "Abeer",
  receiverName: "bebo",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, bebo! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "The first day I saw you, I was sure that I would love you more than anything, and that I fell in love with the most handsome and precious man in my life.🤍",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "To my babyy, ",
  birthdayWishesMessage:
    "Always know that I love you so much and I love having you in my life. You made my life more beautiful and completed everything with your presence by my side. If it weren't for you, I wouldn't have been able to do anything without you. I loved my life with you, and I forget all my worries when we are together. Nothing matters to me as much as you being with me and always happy. I am so lucky to have you, and I hope you stay with me forever because I cannot live without you.'🤍",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;