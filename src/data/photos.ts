import type { ImageMetadata } from 'astro';

import heroFruitBoardTier from '../assets/photos/hero-fruit-board-tier.jpg';
import fruitBoardMarble from '../assets/photos/fruit-board-marble.jpg';
import fruitBoardClassic from '../assets/photos/fruit-board-classic.jpg';
import grazingCheeseRoses from '../assets/photos/grazing-cheese-roses.jpg';
import grazingElevated from '../assets/photos/grazing-elevated.jpg';
import fruitAndCheeseSculpted from '../assets/photos/fruit-and-cheese-sculpted.jpg';
import fruitAndDessertCups from '../assets/photos/fruit-and-dessert-cups.jpg';
import cheesecakeCups from '../assets/photos/cheesecake-cups.jpg';
import mocktailsFlorals from '../assets/photos/mocktails-florals.jpg';
import mocktailsPinkBlue from '../assets/photos/mocktails-pink-blue.jpg';
import babyShowerPinkYellow from '../assets/photos/baby-shower-pink-yellow.jpg';
import dessertTableBlue from '../assets/photos/dessert-table-blue.jpg';
import dessertTablePink from '../assets/photos/dessert-table-pink.jpg';
import nikahGrazing from '../assets/photos/nikah-grazing.jpg';
import bridalPartyBoard from '../assets/photos/bridal-party-board.jpg';
import bridalShowerManna from '../assets/photos/bridal-shower-manna.jpg';
import babyGirlSetup from '../assets/photos/baby-girl-setup.jpg';
import classicPackage from '../assets/photos/classic-package.jpg';
import birthday40th from '../assets/photos/birthday-40th.jpg';
import princessParty from '../assets/photos/princess-party.jpg';
import signatureBoardFruitCheese from '../assets/photos/signature-board-fruit-cheese.jpg';
import grazingPackageLong from '../assets/photos/grazing-package-long.jpg';
import halfHalfBoardMarble from '../assets/photos/half-half-board-marble.jpg';
import genderRevealBoard from '../assets/photos/gender-reveal-board.jpg';
import fullSetupGold from '../assets/photos/full-setup-gold.jpg';
import genderRevealShower from '../assets/photos/gender-reveal-shower.jpg';
import halfHalfBoardTier from '../assets/photos/half-half-board-tier.jpg';
import firstBirthdayBoard from '../assets/photos/first-birthday-board.jpg';
import mocktailRange from '../assets/photos/mocktail-range.jpg';
import universityAwardsBoard from '../assets/photos/university-awards-board.jpg';
import twoBoardsShower from '../assets/photos/two-boards-shower.jpg';
import portElliotGrazing from '../assets/photos/port-elliot-grazing.jpg';
import grazingTableLong from '../assets/photos/grazing-table-long.jpg';
import cheesecakeCupsFerrero from '../assets/photos/cheesecake-cups-ferrero.jpg';
import grazingCloseup from '../assets/photos/grazing-closeup.jpg';

export type Category = 'fruit' | 'grazing' | 'desserts' | 'drinks' | 'setups';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  categories: Category[];
}

const photo = (src: ImageMetadata, alt: string, ...categories: Category[]): Photo => ({ src, alt, categories });

export const photos = {
  heroFruitBoardTier: photo(heroFruitBoardTier, 'A fruit board with a carved fruit tier, dragon fruit flowers and a pineapple crown, beside fresh florals', 'fruit'),
  fruitBoardMarble: photo(fruitBoardMarble, 'A long fruit board with a carved tier on white marble, framed by white plinths', 'fruit'),
  fruitBoardClassic: photo(fruitBoardClassic, 'A 60cm classic fruit board with rows of melon, berries and a dragon fruit flower', 'fruit'),
  grazingCheeseRoses: photo(grazingCheeseRoses, 'A deluxe grazing board with hand-rolled cheese roses, crackers, cold cuts and fresh fruit', 'grazing'),
  grazingElevated: photo(grazingElevated, 'A grazing board with a carved fruit tier, cheese roses and edible flowers', 'grazing', 'fruit'),
  fruitAndCheeseSculpted: photo(fruitAndCheeseSculpted, 'A sculpted fruit board beside a deluxe cheese board', 'fruit', 'grazing'),
  fruitAndDessertCups: photo(fruitAndDessertCups, 'A fruit board with a carved tier next to rows of cheesecake dessert cups', 'fruit', 'desserts', 'setups'),
  cheesecakeCups: photo(cheesecakeCups, 'Cheesecake dessert cups in pistachio, Biscoff and chocolate flavours', 'desserts'),
  mocktailsFlorals: photo(mocktailsFlorals, 'Pink lemonade and pineapple mocktails on white plinths with a glass dispenser and florals', 'drinks', 'setups'),
  mocktailsPinkBlue: photo(mocktailsPinkBlue, 'Pink lemonade and blue lagoon mocktails with dessert cups', 'drinks'),
  babyShowerPinkYellow: photo(babyShowerPinkYellow, 'A pink and yellow baby shower table with fruit, grazing, mocktails and florals', 'setups'),
  dessertTableBlue: photo(dessertTableBlue, 'A blue-themed dessert table with satin draping, cupcakes and dessert cups', 'desserts', 'setups'),
  dessertTablePink: photo(dessertTablePink, 'A pink dessert table with macaron towers, florals and satin draping', 'desserts', 'setups'),
  nikahGrazing: photo(nikahGrazing, 'A Signature Grazing Package with a carved fruit tier and cheese roses at a Nikah', 'grazing', 'fruit'),
  bridalPartyBoard: photo(bridalPartyBoard, 'A 1.4m Half and Half board with a carved tier for a bridal party', 'fruit', 'grazing'),
  bridalShowerManna: photo(bridalShowerManna, 'A white bridal shower setup with a grazing board, dessert cups and drink dispensers', 'setups'),
  babyGirlSetup: photo(babyGirlSetup, 'A soft pink baby shower table with grazing boards, cake pops and dessert cups', 'setups', 'desserts'),
  classicPackage: photo(classicPackage, 'The Classic Package: a fruit board with tier beside a deluxe cheese board', 'fruit', 'grazing'),
  birthday40th: photo(birthday40th, 'A fruit and cheese grazing package for a 40th birthday', 'grazing', 'fruit'),
  princessParty: photo(princessParty, 'A grazing table with dessert cups and personalised chocolate bars for a birthday', 'setups', 'desserts'),
  signatureBoardFruitCheese: photo(signatureBoardFruitCheese, '1.4m fruit and cheese boards with a carved tier, styled as one centrepiece', 'fruit', 'grazing'),
  grazingPackageLong: photo(grazingPackageLong, 'Two 1.4m boards, fruit and grazing, side by side', 'fruit', 'grazing'),
  halfHalfBoardMarble: photo(halfHalfBoardMarble, 'A Half and Half board with a floral fruit tier on marble', 'fruit', 'grazing'),
  genderRevealBoard: photo(genderRevealBoard, 'A fruit board with tier and dessert cups on white plinths for a gender reveal', 'fruit', 'setups'),
  fullSetupGold: photo(fullSetupGold, 'A full event setup with a fruit board, dessert cups and florals in front of gold drapes', 'setups'),
  genderRevealShower: photo(genderRevealShower, 'A pink and blue gender reveal table with mocktails and desserts', 'setups', 'drinks'),
  halfHalfBoardTier: photo(halfHalfBoardTier, 'A Half and Half fruit and cheese board with a carved tier', 'fruit', 'grazing'),
  firstBirthdayBoard: photo(firstBirthdayBoard, 'A Signature Fruit Board with a carved tier for a first birthday', 'fruit'),
  mocktailRange: photo(mocktailRange, 'Blue lagoon, pink lemonade and purple punch mocktails on a white bar', 'drinks'),
  universityAwardsBoard: photo(universityAwardsBoard, 'A Signature Fruit Board at a university faculty awards evening', 'fruit'),
  twoBoardsShower: photo(twoBoardsShower, 'Two 1.2m boards in fruit and cheese for a baby shower', 'fruit', 'grazing'),
  portElliotGrazing: photo(portElliotGrazing, 'A 1.2m Grazing Package with fruit and cheese boards in Port Elliot', 'grazing', 'fruit'),
  grazingTableLong: photo(grazingTableLong, 'A long grazing table with cheese, olives, dips, crackers and a fruit board', 'grazing', 'fruit'),
  cheesecakeCupsFerrero: photo(cheesecakeCupsFerrero, 'Ferrero Rocher and mixed berry cheesecake dessert cups', 'desserts'),
  grazingCloseup: photo(grazingCloseup, 'A close-up of a grazing board with cheese, crackers and fresh berries', 'grazing'),
} satisfies Record<string, Photo>;

export const categoryLabels: Record<Category, string> = {
  fruit: 'Fruit boards',
  grazing: 'Grazing',
  desserts: 'Desserts',
  drinks: 'Mocktails',
  setups: 'Full setups',
};

/** Gallery order: lead with the strongest, most varied shots. */
export const gallery: Photo[] = [
  photos.fruitBoardMarble,
  photos.babyShowerPinkYellow,
  photos.grazingCheeseRoses,
  photos.mocktailsFlorals,
  photos.fruitAndDessertCups,
  photos.dessertTablePink,
  photos.fruitBoardClassic,
  photos.nikahGrazing,
  photos.cheesecakeCups,
  photos.genderRevealBoard,
  photos.dessertTableBlue,
  photos.halfHalfBoardMarble,
  photos.babyGirlSetup,
  photos.grazingElevated,
  photos.fullSetupGold,
  photos.signatureBoardFruitCheese,
  photos.mocktailRange,
  photos.classicPackage,
  photos.bridalShowerManna,
  photos.grazingTableLong,
  photos.cheesecakeCupsFerrero,
  photos.bridalPartyBoard,
  photos.genderRevealShower,
  photos.firstBirthdayBoard,
  photos.grazingPackageLong,
  photos.mocktailsPinkBlue,
  photos.fruitAndCheeseSculpted,
  photos.birthday40th,
  photos.halfHalfBoardTier,
  photos.princessParty,
  photos.universityAwardsBoard,
  photos.portElliotGrazing,
  photos.twoBoardsShower,
  photos.grazingCloseup,
  photos.heroFruitBoardTier,
];
