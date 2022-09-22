 Using create-react-app create a new ract app.

 ```
 npx create-react-app app-1 --template typescript
 ```

- In App.tsx import the persons data.
- Create a ul element replacing the other app contents.
- Loop through the data passing each item to a new component called PersonItem inside the ul element.
- Create a new file called person.tsx and create a new component called
- The Person component should list out using a li item for the Persons first and last name.
- In the App.tsx after the list add a field that is a sum of all of the persons amounts.


Create a new app call app-2 not using create-react-app and duplicate the same application above.

- Update the Person component to show the First and Last Name, the ammount, and email.
- Add some css style to layout the component using classes to hide the li marker.
- Show only one person at a time
- Track the index of the person you want to show using React setState.
- Add buttons next and prev to navigate to from one person to the next using the button element and the onclick event.
- Disable the buttons based upon if there is a next or previous.

Express / Koa

- Create a folder called api
- In the api folder run npm init to create a new node application
- Install typescript and ts-node as dev dependances
- Use the tsc --init command to make a new tsconfig.json file
- Configure the tsconfig.json file to use modules as type node and target the esnext language
- Install express.js using npm.
- Copy over the persons.ts file to the api folder.
- Import the persons and Persons interface. 
- Create an endpoint that returns all of the persons as an array using the GET verb
- Create an endpoint that return one person based on the supplied id using the GET verb and the id supplied as a route value
- Create an endpoint that Creates an new person with no assigned id using the POST verb.
- Create an endpoint that returns all persons that match a last name filter.

React Routes