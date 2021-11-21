# Third-Party-API-Work-Day-Scheduler

![titlepage](https://user-images.githubusercontent.com/91164950/142781397-28d8d03f-4665-44f0-ab52-5a62f9a8e0df.PNG)
Using moment.js I assigned the formatted date to the <p> element with id of currentDay. This appends the date to the title page for reference to the user of the current work day
  
![mainpage](https://user-images.githubusercontent.com/91164950/142781454-07ff9bc6-8798-4de3-a033-c7a475a3112f.PNG)
The timeblocks were all created dynamically using JavaScript and Jquery, spanning from 9AM to 5PM to represent a work day. the timeblocks as shown below are color coded for reference to the current time and when the task, event or reminder that is assigned to that timeblock needs to be completed. 
  
At the time of taking a screenshot it was 5:32 PM hence we only see the grey and red colors on the timeblocks. The Green colored timeblocks represent future blocks. 
  
When each event, task or reminder is inputted into the block the save button must be clicked. This will save the input to the localStorage using .setItem() and upon refreshing the page or on the page load the user will see that the input is still exactly where it was assigned on previous use of the program. This was made possible using .getItem()
