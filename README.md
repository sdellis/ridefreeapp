# README

## About
RideFree is a "Free Uber" that can be used by mutual aid groups to support those
who do not have access to reliable transportation. The RideFreeApp project includes
a REST API backend (in Rails) and a Single Page App (SPA) frontend (in Vue 3). _It will
eventually include a separate server that queries the API and sends appropriate notifications
to users periodically (e.g., unclaimed rides about to expire, reminders for upcoming rides, etc.)._

## System dependencies
RideFree requires the following libraries:
* Ruby 3
* Rails 6
* Node 16.9.1
* Vue 3

Tip: Ruby and Node versions can be managed with [asdf](https://asdf-vm.com/).

## Setup
* Clone this repository: `git clone git@github.com:sdellis/ridefreeapp.git`
* Navigate to the project directory: `cd ridefreeapp`
* Install Rails dependencies: `bundle install`
* Run database migrations: `rails db:create` and `rails db:migrate`
* Navigate to the frontend directory: `cd ridefree-frontend`
* Install the JavaScript/Node dependencies: `npm install`

## Startup
* Run the backend server (from the project root): `rails s`
* Run the frontend server (from the `ridefree-frontend` directory): `npm run serve`
* Visit `http://localhost:8080`
* You may browse the API at `http://localhost:3000/api/v1/rides`

Your RideFree has arrived! Safe travels! 
