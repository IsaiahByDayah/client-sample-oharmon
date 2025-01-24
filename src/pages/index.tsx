import { PodcastInformation } from "components/common/PodcastsContentList"
import About from "components/sections/About"
import Collabs from "components/sections/Collabs"
import Content from "components/sections/Content"
import PhotosMarquee from "components/sections/PhotosMarquee"
import Work from "components/sections/Work"
import { type GetStaticProps } from "next"
import Parser from "rss-parser"

const FULL_CIRCLE_PODCAST_RSS_FEED_URL =
    "https://feeds.soundcloud.com/users/soundcloud:users:442261950/sounds.rss"

export const getStaticProps = (async () => {
    const parser = new Parser()
    const feed = await parser.parseURL(FULL_CIRCLE_PODCAST_RSS_FEED_URL)

    const fullCirclePodcastFeed: PodcastInformation[] =
        feed?.items.map((item, index) => ({
            id: item.guid ?? index,
            title: item.title ?? `#${index + 1}`,
            series: "Full Circle Podcast",
            src: feed?.image?.url ?? "",
            description: item.summary ?? item.contentSnippet,
            url: item.link,
        })) ?? []

    return { props: { fullCirclePodcastFeed } }
}) satisfies GetStaticProps<HomePageProps>

interface HomePageProps {
    fullCirclePodcastFeed: PodcastInformation[]
}

const HomePage = ({ fullCirclePodcastFeed }: HomePageProps) => (
    <>
        <About />

        <PhotosMarquee />

        <Work />

        <Collabs />

        <Content fullCirclePodcastFeed={fullCirclePodcastFeed} />
    </>
)

export default HomePage
