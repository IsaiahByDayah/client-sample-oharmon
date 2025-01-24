import { CssBaseline } from "@material-ui/core"
import { FC, PropsWithChildren } from "react"

const CssBaselined: FC<PropsWithChildren> = ({ children }) => (
    <>
        <CssBaseline />
        {children}
    </>
)

export default CssBaselined
