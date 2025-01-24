import { IconButton } from "@material-ui/core"
import { Twitter, YouTube, LinkedIn } from "@material-ui/icons"

export interface SocialLinksProps {
    className?: string
    color?: string
}

const SocialLinks = ({ className, color }: SocialLinksProps) => (
    <div className={className}>
        <IconButton
            href="https://twitter.com/ODellHarmonJr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Twitter htmlColor={Boolean(color) ? color : "#1DA1F2"} />
        </IconButton>
        <IconButton
            href="https://www.youtube.com/channel/UCW480FeMp9KouuOvEHypLog"
            target="_blank"
            rel="noopener noreferrer"
        >
            <YouTube htmlColor={Boolean(color) ? color : "#C4302B"} />
        </IconButton>
        <IconButton
            href="https://www.linkedin.com/in/odellharmonjr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedIn htmlColor={Boolean(color) ? color : "#207AAF"} />
        </IconButton>
    </div>
)

export default SocialLinks
