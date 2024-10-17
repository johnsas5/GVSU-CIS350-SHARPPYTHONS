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
# Non-Functional Requirements
1. **Login Page**
    1. *It should take no more than 60 seconds for a user to login to their profile*
2. **Signup Form**
     1. *The signup form will enforce some parameters for user generated passwords:*
          - *Passwords must have at least one uppercase letter*
          - *Passwords must have at least one special character: [!,@,#,$,%,^,&,*,(,),_,-]*
          - *Passwords must have be at least 10 characters long.*
4. **Projected Savings Tool**
    1. *Any visual aids such as graphs or pie charts must be accessible to users with colorblindness*
5. **Retirement Tool**
     1. *The retirement tool should be tailored based on a user's age. For example, younger users will be giving more aggresive savings targets, while older users may get less agressive savings targets.*
