# Installed:
@reduxjs/toolkit
react-redux
bulma

# Compenents:
CarForm
CarSearch
CarList
CarValue

# State

If components are going to try to change the state by dispatching action objects, they are going to fetch state by making use of thes useSelector hook and using bunch of JSX expressions to render the state values.

# Redux store design

1. Identify what state exits in the app:
name (string), 
cost (number), 
searchTerm (string),
cars ( array of {id, name, cost}),

// derived state (values that we can calculate using some existing state):

totalCost (number),
matchedCars (???),


2. Identify how that state changes over time

name (string) -  changeName (user types in the name field)

cost (number) - changeCost

searchTerm (string) - changeSearchTerm

cars ( array of {id, name, cost}) - addCar, removeCar etc.

// for each of these STATE VALUES we can create a different MINI REDUCER function inside one of our different SLICE files 

// Redux Toolkit is going to automatically make different ACTION CREATORS for each of these mini reducers

3. Group together common pieces of state (many solutions are possible):

// State related to adding cars (Slice #1):
name (string),
cost (number)

// State related to the list of cars (Slice #2):
searchTerm (string),
cars ( array of {id, name, cost}),


4. Create a slice for each group of state

Slice #1: 

changeName.js
changeCost.js

Slice #2:

changeTerm.js
addCar.js
removeCar.js