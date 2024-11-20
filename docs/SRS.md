# Overview
This document will serve as our team's System Requirements Specification (SRS) sheet, where we will break down the project into a list of features, and list the 
functional and nonfunctional requirements for each feature.
# Functional Requirements
1. **Login Page**
    1. *Users must be able to login using an email and password*
    2. *The system must validate the users login creditentials againsts a database of current users.*
    3. *The system must redirect the user to their home page after succesfully logging in.*
2. **Signup Form**
     1. *Users must be able to signup using any valid email address*
     2. *The system must save the new user to a database of current users*
     3. *The signup form must ask the user for their monthly income and basic expenses, and save them to their account profile.*
4. **Projected Savings Tool**
    1. *The savings tool must be able to graph the user's net monthly income as a pie chart which includes their gross income, and monthly expenses.*
5. **Retirement Tool**
     1. *The retirement tool must allow the user to set a retirement savings goal amount, and a due date of when they would like to have saved that amount.*
     2. *The retirement tool must calculate a monthly payment plan for the user which will allow them to reach their savings goal by the specified due date.*
6. **Help Page**
	1. *The help page shall display clear instructions for how to access the input form*
	2. *The help page shall display clear instructions for how to open an account*
	3. *The help page shall display clear instructions for how to login if the user already has an account*
	4. *The help page shall display the purpose of the website*
7. **Financial Form**
	1. *The form shall include a field for the user to input their monthly income*
	2. *The form shall include a field for the user to input their monthly expenses*
	3. *The data inputted from the user shall be sent to the server and saved upon hitting the submit button*
# Non-Functional Requirements
1. **Login Page**
    1. *It should take no more than 60 seconds for a user to login to their profile*
2. **Signup Form**
     1. *The signup form will enforce some parameters for user generated passwords:*
          - *Passwords must have at least one uppercase letter*
          - *Passwords must have at least one special character: [!,@,#,$,%,^,&,*,(,),_,-]*
          - *Passwords must have be at least 10 characters long.*
    2. *The signup form shall encrypt the data before sending it to firebase*
          - *Passwords must be encrypted before sent to firebase*
          - *Usernames must be encrypted before sent to firebase*
4. **Projected Savings Tool**
    1. *Any visual aids such as graphs or pie charts must be accessible to users with colorblindness*
5. **Retirement Tool**
     1. *The retirement tool should be tailored based on a user's age. For example, younger users will be giving more aggresive savings targets, while older users may get less agressive savings targets.*
     2. *The retirement graph will have alternative text that is screen reader compatible*
     3. *The graph line color will contrast the background so users with minor visual impairments can determine the direction of the graph*
6. **Help Page**
	1. *The help page shall be displayed in a simple and intuitive manner*
	2. *The help page text shall have a readable font*
	3. *The help page text shall be at least 10px*
7. **Financial Form**
	1. *Upon pressing the submit button, the input form shall send its data to the server within 5 seconds*
	2. *The input fields should only accept numbers and no other characters to prevent malicious code attacks*
    3. *The Financial Form shall be intiutive so that the user understands what they need to fill out*
    4. *Upon resizing the screen the form will be correctly updated to the new dimensions*
