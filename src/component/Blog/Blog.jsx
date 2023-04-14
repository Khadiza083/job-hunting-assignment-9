import React from 'react';

const Blog = () => {
    return (
        <div className='grid gap-4'>
            <div className='mt-20 grid gap-3'>
                <h3 className='text-2xl font-semibold'>Question: When should you use Context API?</h3>
                <p><span className='text-xl font-semibold'>Ans: </span>
                    <ul className='ml-6'>
                        <li>1. To avoid Prop Drilling</li>
                        <li>2. Need to manage application settings or configuration</li>
                        <li>3. Need to decouple components</li>
                        <li>4. Need to handle theming or styling</li>
                        <li>5. To provide a default value for props.</li>
                    </ul></p>
            </div>
            <div className='mt-20 grid gap-3'>
                <h3 className='text-2xl font-semibold'>Question: What is Custom Hook? </h3>
                <p><span className='text-xl font-semibold'>Ans: </span>A custom hook is a JavaScript function that allows you to encapsulate reusable logic and stateful behavior that can be shared across multiple components. Custom hooks are a way to abstract complex logic and share it in a modular and reusable way in your React applications.</p>
            </div>
            <div className='mt-20 grid gap-3'>
                <h3 className='text-2xl font-semibold'>Question: What is useRef?</h3>
                <p><span className='text-xl font-semibold'>Ans: </span>useRef is a built-in hook in React that allows you to create a mutable reference to a value or a DOM element that persists across re-renders of a functional component. It is often used to access and manipulate DOM elements directly, manage mutable values that do not trigger component re-renders, or store values that need to persist between component renders.</p>
            </div>
            <div className='mt-20 grid gap-3'>
                <h3 className='text-2xl font-semibold'>Question: What is useMemo?</h3>
                <p><span className='text-xl font-semibold'>Ans: </span>useMemo is a built-in hook in React that allows you to memoize the result of a function computation and cache it, so that the computation is only re-run when its dependencies change. It is often used to optimize performance by avoiding unnecessary re-computations of expensive operations or calculations in functional components.</p>
            </div>
        </div>
    );
};

export default Blog;