# SBA 308A
## Project
SBA 308A is a major project showcasing my skills regarding API and Data fetching in Javascript. I utilized axios and async/await functions to return and modify data from an API. I also utilized axios to return data based on specific search params.

## Requirements
- Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.
- Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
- Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.
- Make use of Promises and async/await syntax as appropriate.
- Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
- Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).
- Create an engaging user experience through the use of HTML and CSS.
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
- Commit frequently to the git repository.
- Include a README file that contains a description of your application. (This!)
- Level of effort displayed in creativity, presentation, and user experience.

## Summary
The webpage allows a user to search an external API for product information (within specific IDs). The webpage automatically loads a few default products from the API (Note: It make take a few seconds for the products to load when accessing for the first time.). The user can send new food product information to the API by pressing the "Submit a Product" button, which will reveal a form the user can fill out.

## Tools Used
VSCode, node.js

## Coding Languages used
HTML,CSS,(vanilla) Javascript

## Limitations
The free food api used is limited to only return data with certain IDs. The following ids will work. Do not add additional spacing or characters to any ID, it'll fetch nothing.

3274080005003,7622210449283,3017620425035,3175680011480,5449000214911,3017620422003, 5449000000996,50184453,3268840001008,5449000214799,3451080155161,5059697734953,5021812005620,5055904223289,4823065729671,3474341105842,5602477842456,5051873005277, 4311501688144,9100000906683,5400141491630,54491472
