1. What problem does the context API help solve?
    Context API manages to pass state to components without drilling through the family tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions could be seen as event handlers. Certain event trigers a binding action and this action passes its type and payload to a reducer for processing the data. Reducer could be seen as a container of a few callback functions with index, which returns an object as the state(data) consumed by a component. Store is the bridge between the Redux reducer and the React component. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the "global" state that all components in the component tree can access, whereas component local state is state that is local to a single component and cannot be seen outside of this component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux by its nature is synchronous. redux-thunk is a middleware that helps resolve the asynchronous issue with Redux when fetching data from API or thirdparty database.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux would be my first choice. Although it complicates the structure of a project, it does simpliy the state management within each component. 
