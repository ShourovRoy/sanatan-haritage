export interface Verse {
    id:             number;
    verse_number:   number;
    chapter_number: number;
    text:           string;
    word_meanings: string;
    translations:   Commentary[];
    commentaries:   Commentary[];
}

export interface Commentary {
    id:          number;
    description: string;
    author_name: AuthorName;
    language:    Language;
}

export enum AuthorName {
    DRSSankaranarayan = "Dr. S. Sankaranarayan",
    ShriPurohitSwami = "Shri Purohit Swami",
    SriAbhinavgupta = "Sri Abhinavgupta",
    SriAnandgiri = "Sri Anandgiri",
    SriDhanpati = "Sri Dhanpati",
    SriJayatritha = "Sri Jayatritha",
    SriMadhavacharya = "Sri Madhavacharya",
    SriMadhusudanSaraswati = "Sri Madhusudan Saraswati",
    SriNeelkanth = "Sri Neelkanth",
    SriPurushottamji = "Sri Purushottamji",
    SriRamanujacharya = "Sri Ramanujacharya",
    SriShankaracharya = "Sri Shankaracharya",
    SriSridharaSwami = "Sri Sridhara Swami",
    SriVallabhacharya = "Sri Vallabhacharya",
    SriVedantadeshikacharyaVenkatanatha = "Sri Vedantadeshikacharya Venkatanatha",
    SwamiAdidevananda = "Swami Adidevananda",
    SwamiChinmayananda = "Swami Chinmayananda",
    SwamiGambirananda = "Swami Gambirananda",
    SwamiRamsukhdas = "Swami Ramsukhdas",
    SwamiSivananda = "Swami Sivananda",
    SwamiTejomayananda = "Swami Tejomayananda",
}

export enum Language {
    English = "english",
    Hindi = "hindi",
    Sanskrit = "sanskrit",
}




