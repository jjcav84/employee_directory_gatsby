[![Netlify Status](https://api.netlify.com/api/v1/badges/11e6687f-a8a2-45cd-9591-79439a0e231a/deploy-status)](https://app.netlify.com/sites/gatsbyemployeedirectory/deploys)

# Employee Directory Code Challenge

## Built with [MDBootstrap](https://mdbootstrap.com/react/), [React](https://reactjs.org/), and [GatsbyJS](https://gatsbyjs.org)

I used this code challenge as an opportunity to learn more about [Gatsby](https://gatsbyjs.org/) as well as create an employee directory app that I can use for my portfolio, and practice my CI/CD skills as far as [Netlify](https://netlify.com) serverless hosting is concerned.

I started out by using my Gatsby starter [site](https://www.gatsbyjs.org/starters/jjcav84/mdbreact-gatsby-starter/) and tearing out everything except for the index, layout, navbar, and header components. I then continued by cleaning up the dependencies, updating them, and creating a card component. I placed the card component into the layout and then hooked it up to the [Rick and Morty API](https://rickandmortyapi) using [GraphQL](https://graphql.org/) queries to their GraphQL [endpoint](https://rickandmorthapi/graphql/).

I cleaned up the code and the dependencies then hosted the app on my [Netlify](https://netlify.com) account. I created a CI/CD pipeline that updates the site when a pull request is merged to this repository. You can find the current iteration deployed [here](https://gatsbyemployeedirectory.netlify.com). If you click on the badge at the top of this README you can see the build and deploy history as well. I then edited the Card component to use props passed from the Index component to ensure that the data was being queried and passed correctly. I then created a Row component to wrap the Cards and refactored to pass props from the Index to the Row component. The Row component passes its props to the Card component. I added a displayCards function to the Index component to create an array of Cards and mapped the data sequentially into these components to create a grid of Employee Cards. Next on the road map for this project is to implement pagination, search, and automated testing.

To run this locally clone the repository and make sure you have the gatsby-cli installed via npm or yarn.

Then in your command line run

`yarn install`

followed by running

`gatsby develop`

You can then access the site locally at https://localhost:8000/
