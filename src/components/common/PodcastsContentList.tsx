import { makeStyles } from "@material-ui/core"
import { chunk } from "lodash"

import useInViewIndexes from "lib/hooks/useInViewIndexes"

import ContentList from "components/common/ContentList"
import OverflowList from "components/common/OverflowList"
import Podcast from "components/common/Podcast"
import SlideIndicators from "components/common/SlideIndicators"

const DEFAULT_CHUNK_SIZE = 2
const DEFAULT_MAX_CHUNKS = 10

const useStyles = makeStyles(({ spacing }) => ({
    slide: {
        width: "100%",
    },
    podcast: {
        "&:not(:first-child)": {
            marginTop: spacing(2),
        },
    },
    indicators: {
        justifyContent: "center",
    },
}))

export interface PodcastInformation {
    id: string | number
    title: string
    series: string
    src: string
    description?: string
    url?: string
}

export interface PodcastsContentListProps {
    className?: string
    feed: PodcastInformation[]

    title?: string
    chunkSize?: number
    maxChunks?: number
    indicators?: boolean
}

const PodcastsContentList = ({
    className,
    title,
    feed,
    chunkSize,
    maxChunks,
    indicators = true,
}: PodcastsContentListProps) => {
    const classes = useStyles()
    const [index, onChange] = useInViewIndexes()

    const _chunkSize = chunkSize ?? DEFAULT_CHUNK_SIZE
    const _maxChunks = maxChunks ?? DEFAULT_MAX_CHUNKS

    const chunks = chunk(feed, _chunkSize).slice(0, _maxChunks)

    return (
        <ContentList className={className} label={title}>
            <OverflowList onChange={(index, value) => onChange(index, value)}>
                {chunks.map((items, chunkIndex) => (
                    <div key={chunkIndex} className={classes.slide}>
                        {items.map((item) => (
                            <Podcast
                                key={item.id}
                                className={classes.podcast}
                                title={item.title}
                                series={item.series}
                                src={item.src}
                                description={item.description}
                                url={item.url}
                            />
                        ))}
                    </div>
                ))}
            </OverflowList>
            {Boolean(indicators) && (
                <SlideIndicators
                    className={classes.indicators}
                    currentIndex={index}
                    total={chunks.length}
                />
            )}
        </ContentList>
    )
}

export default PodcastsContentList
