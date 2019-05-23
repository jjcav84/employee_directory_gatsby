[![Netlify Status](https://api.netlify.com/api/v1/badges/11e6687f-a8a2-45cd-9591-79439a0e231a/deploy-status)](https://app.netlify.com/sites/gatsbyemployeedirectory/deploys)
# Employee Directory Code Challenge

## Built with [MDBootstrap](https://mdbootstrap.com/react/), [React](https://reactjs.org/), and [GatsbyJS](https://gatsbyjs.org)

I used this code challenge as an opportunity to learn more about [Gatsby](https://gatsbyjs.org/) as well as create an employee directory app that I can use for my portfolio, and practice my CI/CD skills as far as [Netlify](https://netlify.com) serverless hosting is concerned.

I started out by using my Gatsby starter [site](https://www.gatsbyjs.org/starters/jjcav84/mdbreact-gatsby-starter/) and tearing out everything except for the index, layout, navbar, and header components. I then continued by cleaning up the dependencies, updating them, and creating a card component. I placed the card component into the layout and then hooked it up to the [Rick and Morty API](https://rickandmortyapi) using [GraphQL](https://graphql.org/) queries to their GraphQL [endpoint](https://rickandmorthapi/graphql/).

I am currently in the process of cleaning the code up, then I am going to host it on my [Netlify](https://netlify.com) and create a CI/CD pipeline that will update the site via pushes and merges to this GitHub repository. After that I will create an array of card components pulled from the API to create the employee directory homepage component. Next, I hope to either implement infinite scroll or pagination. Finally, I plan to implement search functionality perhaps using [Algolia](https://algolia.com/).

To run this locally clone the repository and make sure you have the gatsby-cli installed via npm or yarn.

Then in your command line run

`yarn install`

followed by running

`gatsby develop`

You can then access the site locally at https://localhost:8000/
