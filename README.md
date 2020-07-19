# Coder News
I named the application "Coder News".

https://coder-newz.azurewebsites.net/

## Functionalities
- Implemented the desktop design provided with Angular Material. Made it responsive for tablet and mobile. 
- Global Search feature 
- Upvote (maintaining upvotes using in-browser storage APIs (localStorage) – Reason of using localStorage to keep the data even if the tab/window is closed You can add as many upvotes as you wish.
- Hide functionality to remove the news from user’s view.
- Prev | Next link gets the relevant data and all paginated. URL's are bookmarkable.
- Plot the timeline with the News ID as the x axis and votes on the Y axis This will match the data in the details table above it. 
- The timeline chart is update real time as and when the upvote is clicked.
- ALL MODIFIED DATA like hide and Upvotes – is being persisted and should not reset on browser refresh.


## Implementation
- The application is using Angular 10.0.4
- I tried to keep the architecture as robust as possible while keeping it flexible.
- Server Side Rendering - Angular Universal.
- Service Worker

## Integration
- The pipelines are in Azure DevOps.
- The applicaiton is deployed on Azure Web App Service

## Performance
You might find performance 90 or below if you run Audit, it is because of the server (No optimization), that is delaying the First Contentful Paint.
Here's the screenshot of localhost.
![Perfomance](https://coder-strange-assets.s3.ap-south-1.amazonaws.com/coder-strange-performance.PNG)

## Technologies

* TypeScript
* Angular 10
* Angular Material - UI Component Library
* Angular Universal - SSR
* ngx-charts

## Installation

Coder News requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/coder-strange/coder-news.git
$ cd coder-news
$ npm install
$ npm run build:ssr
$ npm run serve:ssr
```
