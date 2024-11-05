// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Withastro Github Comment Templates",
            description:
                "Copy and paste comments which are commonly used in all @withastro repositories.",
            editLink: {
                baseUrl:
                    "https://github.com/trueberryless-org/withastro-github-comment-templates/edit/main/starlight/",
            },
            logo: {
                light: "./src/assets/logo-white.png",
                dark: "./src/assets/logo-dark.png",
                replacesTitle: true,
            },
            social: {
                github: "https://github.com/trueberryless-org/withastro-github-comment-templates",
            },
            customCss: ["./src/styles/landing.css"],
            expressiveCode: {
                defaultProps: {
                    wrap: true,
                },
            },
            lastUpdated: true,
            plugins: [
                starlightLinksValidator(),
                starlightSidebarTopicsDropdown([
                    {
                        label: "Issue creation",
                        link: "/issue-creation",
                        icon: "open-book",
                        items: [
                            {
                                label: "Bugs",
                                autogenerate: { directory: "issue-creation/bugs" },
                            },
                            {
                                label: "Feature requests",
                                autogenerate: { directory: "issue-creation/feature-requests" },
                            },
                        ],
                    },
                    {
                        label: "PR creation",
                        link: "/pr-creation",
                        icon: "pencil",
                        items: [
                            {
                                label: "Bug fixes",
                                autogenerate: { directory: "pr-creation/bug-fixes" },
                            },
                            {
                                label: "Feature requests",
                                autogenerate: { directory: "pr-creation/feature-requests" },
                            },
                            {
                                label: "Docs",
                                autogenerate: { directory: "pr-creation/docs" },
                            },
                            {
                                label: "Translations",
                                autogenerate: { directory: "pr-creation/translations" },
                            },
                        ],
                    },
                    {
                        label: "Comments",
                        link: "/comments",
                        icon: "comment",
                        items: [
                            {
                                label: "Reviews",
                                autogenerate: { directory: "comments/reviews" },
                            },
                            {
                                label: "Discussions",
                                autogenerate: { directory: "comments/discussions" },
                            },
                        ],
                    },
                ]),
            ],
        }),
    ],
});
