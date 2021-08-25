## StockBit Test

For Answer number 1, 3, 4 could be found at answers directory

----------

### Getting started

To test this online:

    https://stbt-test.herokuapp.com/api/v1/detail/tt4154796
    https://stbt-test.herokuapp.com/api/v1/search?title=Batman&page=1

To test this locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server

----------

## Code overview

### Folders

- `answers` - Contains all of answer for Test number 1, 3, 4
- `constants` - Contains all of the constants that used on the code
- `controllers` - Contains all of the application controller
- `models` - Contains all of the mysql connection that used on the application
- `routes` - Contains all of the the route definitions for the API
- `tests` - Contains all of the jest unit-test cases

Run the project development server

    npx nodemon index.js

The api can now be accessed at

    http://localhost:3000/api/v1

To check the list of available api and can be accessed at

    http://localhost:3000/api/v1/search
    http://localhost:3000/api/v1/detail


----------

#### Available API endpoint:
Search

    http://localhost:3000/api/v1/search

Query String

| **Required** 	|       **Key**      |  **Valid Options**   |
|---------------|--------------------|----------------------|
| Yes      	    | title         	   |          -         	|
| No     	      | page          	   |        1 - 100    	  |

Example: 

``` http://localhost:3000/api/v1/search?title=Batman&page=1 ```

----------
    
Detail

    http://localhost:3000/api/v1/detail/:id

:id -> imdbID ( You could browse any movie in IMDB and get the id on the url ) and it is required

Example:

``` http://localhost:3000/api/v1/detail/tt4154796 ```

----------

Run the unit-test with jest

    npm run test
