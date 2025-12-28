# Pizza Menu

## Concepts

### Debugging

When the development changes have not reflected,

1. check whether your app is running properly
2. reload the web page
3. Always open the console and terminal tab to check the errors
4. Understand the error message at the webpack UI for development issues
5. Check output at terminal with ESLint for debugging any errors

### Components

#### What is Component ?
* React UI is made up of components or Components are the building block of React
* Multiple components are used to render the web UI
* Components can be reused, nested under other components based on their need
* Each component will have seperate logic, appearence and data to handle

#### How to create a Component ?
* Function's first name must be upper case
* It should always return a html tag
* It should return only one component, not more than one

### JSX

#### What is JSX ?
* JSX is a extension of javascript, which will be used to render dynamic data with syntax of html

#### How JSX used in React ?
* JSX will be used in React for the appearence of each component
* JSX will be converted into JS using *Babel*, which will convert it into *React.createElement*
* JSX is declarative, as we only implement what we need to see in UI, it is not imperative as to add logic for the UI

#### Attributes in JSX

We cannot directly use html attributes like class, style in JSX, we need to use in js way

##### Applying Styling to JSX

* Styling should be applied as object on any html element in component properly

```js
function Header() {
  const style = {'color': 'red'};
  return (
    <h1 style={{style}}>Element</h1>
  )
}
```

* For external linking css, we can import the css file using import, which will be automatically applied to the app.

##### Applying other attributes

* You cannot mention direct html attributes like class, you need to mention it in js syntax with className to assign a class in html (as class is a reserved keyword in js)

```js
<h1 className="header">Hello</h1>
```


### Props

* Props used to communicate or passing data from parent component to child component
* props will be passed as attributes
* It will be received in the parameters at the receiver
* If the prop's type is other than string, then again it needs to be passed as JSX

```js
<Pizza name="pizza name" number={number}>;
```

### Props vs State

* Props are served from the parent components, whereas state is an component specific data handler
* Props are immutable as parent data cannot be changed, as states are used to mutate data inside component

So, react only allows one way of data directional flow, but other frameworks supports directional flow


### Seperation of Concerns

* HTML, CSS & JS a technology based seperation
* React JS, a component based seperation
* As Js and HTML are tightly coupled

### React Strict Mode

Use strict mode will render the app twice to make development easy to use. Implementation in root will help on debugging the react

```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Rendering Lists

Rendering the list can be done using just js inside the jsx

```jsx
<ul className='pizzas'>
  {pizzaData.map((pizza) => (
    <Pizza key={pizza.id} pizzaObj={pizza} />
  ))};
</ul>
```
We cannot use forEach as we need to return the component array in order to render it for react

### Conditional Rendering

#### With and (&&)

JSX won't render boolean values directly, so using and operator to check anything true and render the next element based on that

```jsx
{isOpen && <h1>Open</h1>}
```

#### With ternary (? :)

```jsx
{isOpen ? <h1>Open</h1> : <h1>Not Open</h1>}
```

### React Fragments

Fragments allows us to group jsx without any changes to the html tree
Fragments can be indicated by just (<> </>)


## Pizza Menu Building

### First Level Components

Building the outermost components, such as header, footer and the pizza rendering concept as menu, So the tree structure will be like

-> App
  -> Header
  -> Menu
    -> Pizza
  -> Footer

### Writing logic inside Components

Write custom logic for closing and opening time of the restaurant in the footer to know the customer that the restaurant is actually in open or closed currently.

### Applying Styling

Applied styling using external index.css for the header, footer and menu components using class name at index.css

### Adding the list

For dynamic rendering of the pizza, have used unordered list and using map to render each pizza properly
Now the pizzas will render dynamically based on the data provided instead of static rendering

### Using ternary Operator

For to show dynamic value based on open or closed, we are rendering dynamic value using ternary operator to show appropriate message

### Dividing Components

Made Order as seperate component and moved closeHour through props

### Destructing Props

For the first object, instead of single props, using it as object with parent prop names for destructoring

### Fragmented pizzas and description

For grouping the description for menu and pizzas based on pizza condition, have grouped them using React.Fragment to avoid extra tree

### Making sold out

Adding sold out class dynamically for the sold out pizzas from the data that have sold out key as true

### Changing the Title

Changing the title as 'Pizza Restaurant' at index.html for proper title instead of React App

### Component Tree

- App
  - Header
  - Menu
    - Pizza
  - Footer
    - Order