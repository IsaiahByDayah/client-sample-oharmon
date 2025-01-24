import { makeStyles, Theme, Paper } from "@material-ui/core"
import cx from "clsx"

import Quote, { QuoteProps } from "components/common/Quote"

const useStyles = makeStyles<
    Theme,
    { color?: string; variant: "vertical" | "horizontal"; reverse?: boolean }
>(({ spacing, shape, palette }) => ({
    root: ({ variant, reverse }) => ({
        borderRadius: shape.borderRadius * 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: variant === "vertical" ? "column" : reverse ? "row-reverse" : "row",
    }),
    half: ({ variant }) => ({
        display: "flex",
        alignItems: "flex-start",

        ...(variant === "vertical"
            ? {}
            : {
                  flexBasis: "50%",
                  flexGrow: 1,
                  flexShrink: 0,
              }),
    }),
    photo: ({ variant }) => ({
        maxWidth: "100%",
        width: "100%",

        ...(variant === "vertical"
            ? {}
            : {
                  height: "100%",
                  objectFit: "cover",
              }),
    }),
    quote: ({ color = "#ffffff" }) => ({
        backgroundColor: color,
        color: palette.getContrastText(color),

        padding: spacing(2),

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        flexGrow: 1,
    }),
}))

export interface BrandCollabProps {
    className?: string

    src: string
    quoteProps: QuoteProps

    variant?: "vertical" | "horizontal"
    color?: string
    reverse?: boolean
}

const BrandCollab = ({
    className,
    src,
    quoteProps,
    color,
    variant = "vertical",
    reverse,
}: BrandCollabProps) => {
    const classes = useStyles({ color, variant, reverse })

    return (
        <Paper className={cx(classes.root, className)}>
            <div className={classes.half}>
                <img className={classes.photo} src={src} alt="brand collab" />
            </div>
            <Quote
                {...quoteProps}
                className={cx(classes.quote, classes.half, quoteProps.className)}
            />
        </Paper>
    )
}

export default BrandCollab
