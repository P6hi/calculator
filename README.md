# calculator

Calculator I made for The Odin Project. 
During the rewriting of the code, commits slipped my mind.

--------------------------------------------------------------------------------------------------

The principle of the programme however is the following:

The number (and period) buttons have event listeners that add their text content to the display. Upon pressing an operator button, the value of the display is saved in the digits object (which contains three properties: number1, operator, number2) in the number1 property, and the selected operator is saved in the operator property. When clicking number buttons, the programme will check if there is a value for number1 and operator, and if it is true, will clear the display and add the selected number to number2 directly. The programme will also check if number2 is null, and if not, will continue to add the selected numbers to number2. 

When the equals button is clicked, it will check if there are values for number1, operator, number2, and run the correct operation using separate functions for each operation. It will then change the value of number1 to the result, operator to null, and number2 to null, and displays the result.

Clicking the operator button will always add the value to the operator property of the digits object, and will also check if all of the properties have values, and if so will run the operate function, repeating the cycle.

There is also a clear button that will change all the property values to null. 

--------------------------------------------------------------------------------------------------

Known issues:

- Numbers don't wrap or shorten themselves.

- Clicking operator button multiple times adds extra symbols to display.

--------------------------------------------------------------------------------------------------
