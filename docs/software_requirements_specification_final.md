# Overview

The purpose of this document, the Software Requirements Specification, is to describe the functional and non-functional requirements for the system we developed. The following will serve as a comprehensive guide for the stakeholders, developers, and our team to ensure we share a similar understanding of the websites objectives and capabilities. Here we will specify the expected functioality, performance, constraints, and user interactions. This will allow us to align our design and functionality with the completed application.

# Software Requirements

Software requirements defines what a system should do (functional requirements) and its performance (non-functional requirements). Functional requirements describe specific tasks. These might include features or behaviors of the software. On the other hand, non-functional requirements outline the quality of the performance. These are attributes like performance, security, and scalability. Both are essential to ensure software is developed for the right purpose and functions correctly.

## Functional Requirements

### Financial Form

| ID  | Requirement     | 
| :-------------: | :----------: | 
| FR1 | The form shall have different fields for each expense for the user to fill out. | 
| FR2 | The system shall calculate the monthly income and expenses on the back end. | 
| FR3 | The users finacial data shall be saved for later use. | 
| FR4 | The system shall validate the input data to only accept numerical values |
| FR5 | The form shall have a submit button for the user to send their data to the server once completed. |

### Login Page

| ID  | Requirement     | 
| :-------------: | :----------: |
| FR6 | There shall be fields for the user to input both their username and password. | 
| FR7 | The system shall allow users to securely type their password in a masked input field. | 
| FR8 | The user shall be disallowed into an account if their username or password are incorrect. | 
| FR9 | The user shall be redirected to the financial form upon a successful login. |
| FR10 | The login contain shall have a submit button that sends to the input data to the server once clicked. |

### Account Summary

| ID  | Requirement     | 
| :-------------: | :----------: |
| FR11 | The system shall present the user with their name and balance. | 
| FR12 | The system shall show the users projected savings for retirement at a fixed 8% interest rate. | 
| FR13 | The system shall show the user their monthly expenses in the form of bar graph. | 
| FR14 | The navigation bar shall allow the user to backtrack to the financial form to update data. |
| FR15 | The system shall provide the user with a financial suggestion based on their current spending patterns. |

## Non-Functional Requirements

### Financial Form 

| ID  | Requirement     | 
| :-------------: | :----------: | 
| NFR1 | The users financial data shall be encrypted with AES-256 in the firebase server. | 
| NFR2 | The financial form shall comply with GDPR guidelines (data used only for purpose of wesite). |
| NFR3 | The server shall save all submissions to maintain a comprehensive paper trail. |
| NFR4 | The user shall be redirected to the account summary within 5 seconds of submitting their data. | 
| NFR5 | The financial form shall dynamically resize so users with varying resolutions can still use the website. |

### Login Page

| ID  | Requirement     | 
| :-------------: | :----------: | 
| NFR6 | The users login data shall be encrypted with AES-256 in the firebase server. | 
| NFR7 | The back end shall authenticate the user's credentials within 5 seconds of submitting. |
| NFR8 | The system shall be able to handle 50 simultaneous logins without issues. |
| NFR9 | The system shall render the login page within 1 second upon user navigation. | 
| NFR10 | The system shall have a consistent layout and design across all supported devices. |

### Account Summary

| ID  | Requirement     | 
| :-------------: | :----------: | 
| NFR11 | The page shall render the bar graph and retirement graph within 5 seconds of loading the page. | 
| NFR12 | The summary container shall be scrollable so the user can navigate to the financial suggestion below their information. |
| NFR13 | The containers shall have zoom functionalities so users with vision impairments can enlarge text. |
| NFR14 | The retirement graph shall be correctly calculated to show the growth from the users current age to their desired retirement age. | 
| NFR15 | The system shall suggest an action based on the numerical values from the users financial form. |

# Software Artifacts

The purpose of software artifacts is to visually document the development process. These will serve as deliverables and representations of our work throughout the software lifecycle. The diagrams show interactions between the different parts of our application. Atrifacts are crucial for the designing, planning, development, and testing of a system.

* [Use Case Diagram](artifacts)
* [UML Diagram](artifacts/Budgeting%20Tool%20UML%20-%20Class%20Diagram.pdf)
* [Sequence Diagram](artifacts/Sequence%20Diagram.pdf)
* [Gantt Chart](artifacts/Gantt%20Chart.pdf)
* [UI Markup](artifacts/ui-markup.PNG)

## Unit tests

(copy/paste the below table a minimum of 4 times)

| ID  | Description | Steps | Input Values | Expected Output | Actual Output | Pass/Fail | Requirement Link |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
| TC1 | <TC1 description> | <steps to execute TC1> | <input values to this test case> | <expected output as a result of test case> | <actual output of test case> | <did it pass or fail?> | <requirement IDs this test case is linked to> |

## Integration tests

(copy/paste the above table a minimum of 3 times)

## System tests

(copy/paste the above table a minimum of 3 times)
