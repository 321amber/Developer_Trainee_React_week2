## Components:
react components are the building blocks of react, these are piece of information that enables us to make react information more reusable and readable.

@ types are there:- Functional and Class components

functional components:- these are made using functions and returns JSX code
class components:- these are the classes that uses the classes as the components.

## JSX:-
stands for Javascript XML
it is a javascript syntax extension that makes javascript to look like HTML. doesnot directly returns HTML, converts it into js object and then returns it.

## state
In React, state is a built-in object that allows components to store and manage data that can change over time. When the state of a component changes, React automatically re-renders that component and its children to reflect the updated data in the user interface.

## Hooks 
hooks are the functions that let us hook into the react functional components.

useState: hook to manage states in functional components.

useRef: this hook is used to take reference for the variables and doesnot re renders when state changes.
we can get the current value of it using .current object.

useMemo:- this hook is used for the results of the functions, so that functions doesnot need to recalculate larger outputs, and returns same values of the results until the parameters of the components doesnot changes.

ueCallback:- this hook is used for the memoizing the reference of the whole function, so the use is if parent component passsing the function as prop to child component, then this will save the function reference inside parent and if parent rerenders so because of not memoizing child may also re render, but if we memoize , prop on child will not change and compoent will not re render.

## React Router:

React Router is a widely used JavaScript library that enables client-side routing in React applications. It allows developers to create Single-Page Applications with dynamic navigation without requiring full page reloads when users move between different "pages" or views within the application. 

## Form Validation
Form validation in React ensures that user input meets specified criteria before submission, preventing incorrect or incomplete data and enhancing the user experience.

