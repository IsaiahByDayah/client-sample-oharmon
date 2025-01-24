import { Container, makeStyles, Theme, Typography, useMediaQuery } from "@material-ui/core"
import cx from "clsx"

import ON_CAMERA_HOSTING from "data/onCameraHosting"
import PODCAST_APPEARANCES from "data/podcastAppearances"
import VIDEO_CONTENT from "data/videoContent"
import WRITTEN_WORK from "data/writtenWork"

import useInViewIndexes from "lib/hooks/useInViewIndexes"

import Article from "components/common/Article"
import ContentList from "components/common/ContentList"
import OverflowList from "components/common/OverflowList"
import PodcastsContentList, { PodcastInformation } from "components/common/PodcastsContentList"
import SlideIndicators from "components/common/SlideIndicators"
import Video from "components/common/Video"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
    },
    list: {
        marginTop: spacing(10),

        "&:first-child": {
            marginTop: 0,
        },
    },
    indicators: {
        justifyContent: "center",
    },
}))

export interface ContentProps {
    className?: string
    fullCirclePodcastFeed: PodcastInformation[]
}

const Content = ({ className, fullCirclePodcastFeed }: ContentProps) => {
    const classes = useStyles()

    const [writtenIndex, writtenOnChange] = useInViewIndexes()
    const [videoIndex, videoOnChange] = useInViewIndexes()
    const [hostingIndex, hostingOnChange] = useInViewIndexes()

    const disableGutters = useMediaQuery<Theme>((theme) => theme.breakpoints.down("lg"))

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                My Work Around The Internet
            </Typography>

            <Container disableGutters={disableGutters}>
                <PodcastsContentList
                    className={classes.list}
                    title="Full Circle Podcast"
                    feed={fullCirclePodcastFeed}
                />

                <PodcastsContentList
                    className={classes.list}
                    title="Podcast Appearances"
                    feed={PODCAST_APPEARANCES}
                />

                <ContentList className={classes.list} label="Written Work">
                    <OverflowList onChange={(index, value) => writtenOnChange(index, value)}>
                        {WRITTEN_WORK.map((article, index) => (
                            <Article key={index} {...article} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={writtenIndex}
                        total={WRITTEN_WORK.length}
                    />
                </ContentList>

                <ContentList className={classes.list} label="Video Content">
                    <OverflowList onChange={(index, value) => videoOnChange(index, value)}>
                        {VIDEO_CONTENT.map((video, index) => (
                            <Video key={index} {...video} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={videoIndex}
                        total={VIDEO_CONTENT.length}
                    />
                </ContentList>

                <ContentList className={classes.list} label="On Camera / Hosting">
                    <OverflowList onChange={(index, value) => hostingOnChange(index, value)}>
                        {ON_CAMERA_HOSTING.map((appearance, index) => (
                            <Video key={index} {...appearance} />
                        ))}
                    </OverflowList>
                    <SlideIndicators
                        className={classes.indicators}
                        currentIndex={hostingIndex}
                        total={ON_CAMERA_HOSTING.length}
                    />
                </ContentList>
            </Container>
        </div>
    )
}

export default Content
