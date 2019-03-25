# TRIANGLE TRACKER
## Description
An application that will help us know whether a triangle is `isosceles,` `equilateral,` `scalene` or `NOT a triangle at all`.

## Functionality
- [X] For an equilateral triangle, all sides must be equal.
- [X] For an isosceles triangle, two sides are exactly equal.
- [X] For a scalene triangle, none of the sides is equal. However, the sum of any two sides of the triangle must be greater than the third side.
- [X] Most importantly, if the sum of any two sides of the triangle is equal to or less than the third remaining side, then a triangle CANNOT be formed using those values. (For example, the values 9,4 & 3 cannot form a triangle.)

## BDD
| BEHAVIOUR                            | INPUT                              | OUTPUT                   |
|--------------------------------------|------------------------------------|--------------------------|
|When three sides are equal            |side1=side2=side3                   | Equilateral Triangle     |
|When two out of three sides are equal |side1=side2,side2=side3,side3=1     | Isosceles Triangle       |
|No sides are equal but sum of 2 sides |side1!==side2!==!side3              | Scalene Triangle         |
| is greater than third side           |                                    |                          |
|Sum of 2sides less than third side    |side1+side2<side3,side2+side3<side1,|      Not a Triangle      |
|                                      |side3+side1>side2                   |                          |

# Github Pages
The UI templates can be tested on [github pages](https://tgalvinjr.github.io/Triangle_Tracker/)
## Setup instructions
1. Clone the repository 
`git clone https://github.com/tgalvinjr/Triangle_Tracker.git`
2. Switch to the projet directory 
`cd Triangle_Tracker`
3. Launch the `index.html` in a browser preferable `Google Chrome`

## Technologies 
`HTML5`, `CSS3`, `JavaScript`

### Author(s) information
Alvin Michoma
[Github](https://github.com/tgalvinjr)

## License and Copyright information
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/tgalvinjr/Triangle_Tracker/blob/master/LICENSE) file for details

## Acknowledgments
- Hat tip to anyone who unblocked me in class
- Special thanks to Moringa TMs Peter and Newton for the guidance

