# TRIANGLE TRACKER
An application that will help us know whether a triangle is `isosceles,` `equilateral,` `scalene` or `NOT a triangle at all`.

## Functionality
- [X] For an equilateral triangle, all sides must be equal.
- [X] For an isosceles triangle, two sides are exactly equal.
- [X] For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.
- [X] Most importantly, if the sum of any two sides of the triangle is equal to or less than the third remaining side, then a triangle CANNOT be formed using those values. (For example, the values 9,4 & 3 cannot form a triangle.)

## BDD
1. A user can enter the length values of the three sides of a triangle in the HTML form provided in the application.
2. After user submits the values, the application should tell them what type of triangle the values will produce, whether an `isosceles`, `equilateral`, `scalene` or `NO triangle at all`.
3. The values entered by the user must be an integer or float. Other input types will trigger a validation error message `"❌ You have entered "value" which is not a number! 🤔. Please TRY AGAIN"` 

