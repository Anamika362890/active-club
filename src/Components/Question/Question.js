import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question'>
                <h1>This is Question Part</h1>
                <h3>1.How Does React Work?</h3>
                <p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.

                    Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
                <h3>2.Write down the difference between props and state.</h3>
                <p>Props:Props allow you to pass data from one component to other components as an argument.Props are used to communicate between components.Props are external and controlled by whatever renders the component.Props are read-only and Props are immutable.</p>
                <p>State:The state is a local data storage that is local to the component only and cannot be passed to other components.State holds information about the components.The State is internal and controlled by the React Component itself.State changes can be asynchronous.
                    State is mutable.</p>
                <h3>3.Why we use UseEffect (Without loading data fetch from Api)?</h3>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.UseEffect is an alternative for lifecycle method in class components in a functional component. It can be used to execute actions when the component mounts, or certain prop or state updated for component as well as to execute code when the component is about to unmount</p>
            </div>
        </div>
    );
};

export default Question;