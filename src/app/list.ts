export interface List {
    name: string;
    roman: string;
    color: string;
    playlistLink: string;
    intro?: string;
    list: Song[];
}

export interface Song {
    song: string;
    artist: string;
    description: string;
    link: string;
}