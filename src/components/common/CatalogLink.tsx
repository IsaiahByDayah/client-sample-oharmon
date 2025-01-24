import { ReactNode } from "react"
import { makeStyles, Theme, Button } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles<Theme, { color: string }>(({ palette }) => ({
    root: ({ color }) => ({
        backgroundColor: color,
        color: palette.getContrastText(color),
        "&:hover": {
            backgroundColor: palette.augmentColor({ main: color }).dark,
        },
    }),
}))

export interface CatalogLinkProps {
    className?: string
    children?: ReactNode

    href?: string
    color?: string
}

const CatalogLink = ({ className, children, href, color = "#ffffff" }: CatalogLinkProps) => {
    const classes = useStyles({ color })

    return (
        <Button
            className={cx(classes.root, className)}
            variant="contained"
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Button>
    )
}

export default CatalogLink
