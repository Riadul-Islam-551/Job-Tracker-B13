# 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll #

- `getElementById()` is used to select a single element using its unique id. This method always returns only one element.
- `getElementsByClassName()` is used to select elements by their class name. Unlike getElementById(), it can return multiple elements. It returns an HTMLCollection, which is a live collection. This means if the DOM changes, the collection updates automatically.
- `querySelector()` and `querySelectorAll()` are more flexible. They use CSS selector syntax.
`querySelector()` returns the first matching element.
`querySelectorAll()` returns all matching elements as a NodeList.

# 2. How to Create and Insert a New Element into the DOM #

To create a new element in JavaScript, use the document.createElement() method. This method creates a new HTML element in memory.
After creating the element, add text or attributes to it. For example, we can use innerText or innerHTML to add content.
Finally, to insert the element into the webpage, we use methods like:

- appendChild() (adds at the end)

- prepend() (adds at the beginning)

- append() (modern and flexible method)

# 3. What is Event Bubbling? How Does It Work #

Event bubbling is a concept in JavaScript where an event starts from the target element and then moves upward to its parent elements.

For example, if a button is inside a div and both have click event listeners, clicking the button will first trigger the button’s event, and then the event will “bubble up” to the div.
This happens because events move from the innermost element to the outer elements in the DOM hierarchy. Event bubbling is the default behavior in JavaScript.

# 4. What is Event Delegation in JavaScript? Why Is It Useful? #

Event delegation is a technique where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element.
This works because of event bubbling. When a child element is clicked, the event bubbles up to the parent, and the parent can detect which child triggered the event.

**Event delegation is useful because:**

- It improves performance.
- It works for dynamically added elements.
- It keeps the code cleaner and more organized.
- In large applications, event delegation is very important for writing efficient and scalable code.

# 5. Difference Between `preventDefault()` and `stopPropagation(`) #

Both methods are used in event handling, but they serve different purposes.
`preventDefault()` is used to stop the default browser behavior. For example, it can prevent a form from submitting or stop a link from navigating to another page.
`stopPropagation()`, on the other hand, stops the event from bubbling up to parent elements. This means the event will only run on the current element and not affect its parent elements.

**In short:**

`preventDefault()` stops the browser’s default action.

`stopPropagation()` stops the event from moving up the DOM tree.
