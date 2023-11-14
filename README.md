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
3. Group together common pieces of state
4. Create a slice for each group of state
