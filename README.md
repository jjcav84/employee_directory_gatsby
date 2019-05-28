[![Netlify Status](https://api.netlify.com/api/v1/badges/11e6687f-a8a2-45cd-9591-79439a0e231a/deploy-status)](https://app.netlify.com/sites/gatsbyemployeedirectory/deploys)

# Employee Directory Code Challenge

## Built with [MDBootstrap](https://mdbootstrap.com/react/), [React](https://reactjs.org/), and [GatsbyJS](https://gatsbyjs.org)

I used this code challenge as an opportunity to learn more about [Gatsby](https://gatsbyjs.org/) as well as create an employee directory app that I can use for my portfolio, and practice my CI/CD skills as far as [Netlify](https://netlify.com) serverless hosting is concerned. This means that I spent a bit more time on it that I would have if I was simply approaching this as a code challenge without any other motivation. I had a lot of fun and some frustration as I learned quite a lot since much of this was new to me as I have more experience building with create-react-app than I do with Gatsby. I much prefer Gatsby and see the JAMstack as a more modern approach which allows me to do quite a bit more on my own and with a smaller budget than I have ever been able to before. I look forward to learning and making more contributions to the project as I move ahead into the future.

I started out by using my Gatsby starter [site](https://www.gatsbyjs.org/starters/jjcav84/mdbreact-gatsby-starter/) and tearing out everything except for the index, layout, navbar, and header components. I then continued by cleaning up the dependencies, updating them, and creating a card component. I placed the card component into the layout and then hooked it up to the [Rick and Morty API](https://rickandmortyapi) using [GraphQL](https://graphql.org/) queries to their GraphQL [endpoint](https://rickandmorthapi/graphql/).

I cleaned up the code and the dependencies then hosted the app on my [Netlify](https://netlify.com) account. I created a CI/CD pipeline that updates the site when a pull request is merged to this repository. You can find the current iteration deployed [here](https://gatsbyemployeedirectory.netlify.com). If you click on the badge at the top of this README you can see the build and deploy history as well. I then edited the Card component to use props passed from the Index component to ensure that the data was being queried and passed correctly. I then created a Row component to wrap the Cards and refactored to pass props from the Index to the Row component. The Row component passes its props to the Card component. I added a displayCards function to the Index component to create an array of Cards and mapped the data sequentially into these components to create a grid of Employee Cards. The following task was to setup more tooling such as husky to lint files on commit, setting up jest for testing with one unit test, and adding a Dockerfile to build the app into a Docker container for use in containerized environments. 

I also cleaned and updated the dependencies at this point again to keep things easier for me to maintain going forward and avoid hairy situations such as circular dependencies. The final thing I did was to implement a simple search by hooking the app up to Algolia and then building a landing page that shows only one employee card and a search form that is best used to search by employee ID number although it will return the first hit for species, status, gender, and status at this point. I renamed the index page with all of the employee cars to directory and added an internal link in the header that preloads in the background while the user is on the new index page that has the search and the single employee card. 

I plan to add in more search functionality as well as pagination to break the main directory into multiple pages to improve UX by reducing the page size to improve load time of the card images. I also want to work more with the automated testing and build out unit tests for all of the components.

To run this locally clone the repository and make sure you have the gatsby-cli installed via npm or yarn.

Then in your command line run

`yarn install`

followed by running

`gatsby develop`

You can then access the site locally at https://localhost:8000/

##NOTE

If you dig into the browser console or analyze the app's performance on [Web Page Test](https://webpagetest.org/) you will find 404 errors regarding the favicon and site icons. I built the logo using a [Font Awesome](https://fontawesome.com/) as well as CSS so Gatsby was unable to automatically generate the the .ico and .png files that it normally does. in a real world scenario the logo would be handed to me by a designer or I would create one myself. Additionally the app is not as pixel perfect on every device due to following the stated directions regarding perfection of the interface. I was focused on feature implementation as suggested in the code challenge instructions.
