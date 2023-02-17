module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        "@whitespace/storybook-addon-html",
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    html: {
        prettier: {
          tabWidth: 4,
          useTabs: false,
          htmlWhitespaceSensitivity: "strict",
        },
    },
    framework: '@storybook/react',
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    // typescript: {
    //     check: true, // type-check stories during Storybook build
    // },
    // core: {
    //     builder: 'webpack5',
    // },
}
