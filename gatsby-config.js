plugins: [
    {

      resolve: `gatsby-plugin-sass`,

      options: {

        pathToConfigModule:`${__dirname}/src/styles/index`,

        // Override the file regex for SASS

        sassRuleTest: /\.global\.s(a|c)ss$/,

        // Override the file regex for CSS modules

        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,

      },

    },
]
