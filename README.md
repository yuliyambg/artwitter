## README

Artwitter allows a user to post art and other users to post comments on the art.
It was built to enable people to meet on the platform and discuss about art.

This app uses Rails API back-end with PostgreSQL database and Javascript for the front-end.

## The Back-End:

The following end-points are used in the API to fetch data:

* 'http://localhost:3000/arts' : This is the index for fetching all arts and contains nested comments for each art. This end point has get and post routes for creating new arts.

* 'http://localhost:3000/arts/${id}/comments' :This route is allowing to get and post comments for a specific art.

## The Front-End

The front-end uses Javascript to asynchronoulsy make get and post fetch requests to the rails API to get the data and save data to the API.
The front-end uses JS classes and methods.

## Getting Started
To get started with the app, clone the repo 
* `Git Clone`

Navigate to artwitter_api directory
* `cd artwitter_api`

Install the needed gems
* `bundle install`

Start PostgreSQL server
* 'https://www.postgresql.org/download/'

Create the database
* `rake db:create`

Migrate the database
* `rake db:migrate`

Seed the database
* `rake db:seed`

Run the app in local server
* `rails s`

* Open index.html in your browser 

## Contributing

Bug reports and pull requests are welcome on GitHub.

## Additional Information
Click on `Add artwork` button to add new art. 
Click on Artwork title to see each individual art and access Comments Section (view comments & post comments)

## License 

All source code is available under MIT License. See LICENSE.md for details.
