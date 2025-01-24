interface BrandCollabInfo {
    src: string
    message: string
    person: string
    role?: string
    color?: string
}

const COLLABS: BrandCollabInfo[] = [
    {
        message:
            "O’Dell’s leadership and tenacious drive to tell stories and create great content will bring a spark to any team!",
        person: 'Charles "Power" Adiukwu Jr.',
        role: "Founder & Head of Content, The Game Fanatics",
        src: "/collab_the_game_fanatic.webp",
        color: "#CF4728",
    },
    {
        message:
            "I believe O’Dell Harmon would be a strong addition to any organization that could capitalize on his broad-ranging skills.",
        person: "Matt Miller",
        role: "Senior Previews Editor, Game Informer",
        src: "/collab_game_informer.webp",
        color: "#00659F",
    },
    {
        message:
            "He can podcast, make videos, and probably school us all in the titles we think we're great at. If this is a job about covering games, hire O'Dell.",
        person: "Greg Miller",
        role: "Co-Founder, Kinda Funny",
        src: "/collab_kinda_funny.webp",
        color: "#1CB1A7",
    },
]

export default COLLABS
