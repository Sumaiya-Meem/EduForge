
# At least 3 features of my project

1.If you click on the select button,the course names will automatically appear in the course name list in the side bar.

2.If you want to see the total price,total credit hour and remaining credit hour then click on the select button to show the total price, total credit hour and remaining hour of selected course.

3.If your remaining hour is 0 then if you want to add another course it will show you an warning toast message.

4.If anyone click same course more than 1 time then it show an waring toast and he can not add a course which is already selected.


# Managed the state in the  project

First of all create an usestate with initial value empty array and set two parameter name cardData and setcardData in cards.jsx file .Then using fetch set each course in setCardData. Then excute an map loop in cardData and pass this as props in card.jsx file which show the card details.

I use a usestate in app.jsx file of which is to show the selected course, for this make an array function name handleCourseName .This function is pass in Cards file as props and from there sent an props format in card.jsx file.After receive this props ,put this function in select button and pass card object as result handleAddCourseName function get selected course as parameter.Pass it into CardsDetails file and from there sent the selectCourse array in CourseList beacuse in this file i want to show the selected course name.

Use another 3 useState to maintain total cost, total credit hour and remaining hour.First of all total credit,remaining hour and total cost is set zero.When select a course a new varibale(count,cost) get the value of credit and price of selected course. Then using forEach loop it push previous all selected course credit and price value into itself.If total remaing hour is less than zero it show an toast otherwise set the value of credit,remaining hour and total cost into the setTotalCredit,setRemainingHour,setTotalCost.

To see remaining hour ,total credit and totalcost ,i pass the value of totalCredit,remainingHour,totalCost into CardsDetails file as props because of in this file i show the total credit hour and total remaining hour.



