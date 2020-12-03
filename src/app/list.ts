export interface List {
    name: string;
    list: Song[];
}

export interface Song {
    song: string;
    artist: string;
    description: string;
    link: string;
}