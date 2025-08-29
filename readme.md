

###  Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById: a single element by its unique id.
getElementsByClassName: all elements that have a specific class name.
querySelectorAll:  all elements that match a specified CSS selector.


2. How do you **create and insert a new element into the DOM**?
Ans: Use the document.createElement() method to create a new HTML element. This method takes a string representing the tag name of the element you want to create 'div', 'p', 'span'.

3. What is **Event Bubbling** and how does it work?
Ans: The inner div's click listener is triggered. 
The event then bubbles up, triggering the middle div's click listener. 
Finally, the event bubbles up to the outer div, triggering its click listener. 

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: The parent div's click listener is triggered.
The event listener on the parent element catches this bubbled event.
Inside the parent's event handler, the event.target property is used to identify the specific child element that originally triggered the event, allowing for targeted handling.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault():
This method prevents the browser's default action associated with a specific event.
stopPropagation():
This method prevents the event from propagating further up or down the DOM tree during the event's capturing or bubbling phases.

