/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    output: "export",
    eslint: {
        // REF: https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
        dirs: ["pages", "components", "lib", "hooks"],
    },
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },
}
