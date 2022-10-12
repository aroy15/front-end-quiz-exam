import React from 'react';

const Blog = () => {
    return (
        <section className='py-5 mt-4'>
            <div className="container">
                <h1 className='text-center pb-4'>Blog</h1>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 g-4 d-flex">
                        <div className='shadow p-3 rounded'>
                            <h3>What is the purpose of React Router?</h3>
                            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 g-4 d-flex">
                        <div className='shadow p-3 rounded'>
                            <h3>How does context API works?</h3>
                            <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 g-4 d-flex">
                        <div className='shadow p-3 rounded'>
                            <h3>How does useRef works?</h3>
                            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument {`(initialValue)`}. The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;