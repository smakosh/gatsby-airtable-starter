# Gatsby Airtable starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/246515cd-93a8-4449-bed8-96567307b1e1/deploy-status)](https://app.netlify.com/sites/gatsby-airtable-starter/deploys)

## Features

- Static content fetched from Airtable
- Dynamic content with CRUD operations with Airtable REST API
- Well structured files/folders
- Custom React Hooks
- Custom Helpers instead of using third party libraries
- Dynamic & Static containers
- Global state management ready with useReducer & useContext
- Dummy auth but ready to add real requests

## Prerequisites

[Yarn](https://yarnpkg.com/en/)
[Airtable Account](https://airtable.com/invite/r/HZvSWsO8)

> Using my referral link will get me \$10 in credit

Please create a new file `.env.development` and put these env variables

> You will have to create another `.env.production` file to build locally

```bash
GATSBY_AIRTABLE_API_KEY=<<Your Aitable API KEY here>>
SCENES_BASE_ID=<<Your Aitable Base Id here>> (You can change the name of this env if you wish, but make sure to change it within the code as well)
```

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

## Delete the previous cached fetched data

```bash
yarn reset
```

## Build

```bash
yarn build
```

## Built with

- Gatsby
- @reach/router
- VSCode
- styled-components
- And these useful JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support

If you love this starter and want to support me, you can do so through my Patreon

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
