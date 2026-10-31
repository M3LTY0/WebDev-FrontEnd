# WebDev - FrontEnd

## **Group Members - Braden, Mathis and Jerry**

Braden - NavBar, Footer, addStudent

Mathis - StudentPortal, StatsPanel

Jerry - StudentList, StudentCard and SearchBox


## **Deployed Link**
https://newgenhigh.vercel.app/

## **GitHub Link**
https://github.com/M3LTY0/WebDev-FrontEnd

## **Tests**
| **Task**                                                                              | **Expected Result**                                                                                                                                   | **Result** |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Open the app.                                                                         | Every student from your data file shows, and the three numbers match your data.                                                                       | Pass       |
| Click **Show details** on one card, then click it again.                              | That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. | Pass       |
| Remove a grade 12 student.                                                            | The student is gone, and both Students and Graduating drop by one.                                                                                    | Pass       |
| Type a last name in capitals, such as AHMED, into the search box. Then empty the box. | Only the matching student shows. When the box is empty, every student is back.                                                                        | Pass       |
| Search for zzz.                                                                       | The no-students message shows. The three numbers do not change: search changes what is shown, not the list.                                           | Pass       |
| Leave the first name empty, fill in the last name, and click **Add student**.         | Nothing is added.                                                                                                                                     | Pass       |
| Fill in all four inputs and click **Add student**.                                    | The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70.                                              | Pass       |
| Click **Clear all**.                                                                  | The no-students message shows, and all three numbers are 0.                                                                                           | Pass       |
| Narrow the browser to phone width (DevTools device toolbar).                          | The cards stack in one column, and nothing scrolls sideways.                                                                                          | Pass       |
| Click each link in the navbar.                                                        | The page jumps to that section.                                                                                                                       | Pass       |