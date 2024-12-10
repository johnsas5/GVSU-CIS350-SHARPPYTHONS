# Overview

The purpose of this document, the Software Requirements Specification, is to describe the functional and non-functional requirements for the system we developed. The following will serve as a comprehensive guide for the stakeholders and our team to ensure we share a similar understanding of the websites objectives and capabilities. Here we will specify the expected functioality, performance, constraints, and user interactions. This will allow us to align our design and functionality with the completed application.

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

* [Use Case Diagram](../artifacts/use-case-diagram/Use-case.png)
* [UML Diagram](../artifacts/Budgeting%20Tool%20UML%20-%20Class%20Diagram.pdf)
* [Sequence Diagram](../artifacts/Sequence%20Diagram.pdf)
* [Gantt Chart](../artifacts/Gantt%20Chart.pdf)
* [UI Markup](../artifacts/ui-markup.PNG)

## Unit tests


| ID  | Description | Steps | Input Values | Expected Output | Actual Output | Pass/Fail | Requirement Link |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
| Test-001 | Verify the FinancialData component renders a financial form. | 1. Import the FinancialData component. <br> 2. Wrap the component in MemoryRouter. <br> 3. Use render to render the component. <br> 4. Check for the presence of text or elements related to the financial form. | N/A | The financial form is displayed on the screen. | The financial form is displayed. | Pass |[link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#financial-form) |
| Test-002 | Verify the Help component renders without crashing.| 1. Import the Help component. <br> 2. Use render() from @testing-library/react to render the Help component. <br> 3. Observe whether any errors occur during rendering. | N/A |The Help component renders successfully without errors. |The Help component renders without crashing. | Pass |[link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#financial-form) |
| Test-003 | Verify the home page renders without crashing. | 1. Import the Home component. <br> 2. Import render from @testing-library/react. <br> 3. Use render(<Home />) to render the component. <br> 4. Observe if any errors occur during rendering.| N/A |The Home page renders successfully without any errors or crashes. | The Home page renders without crashing. | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#financial-form) |
| Test-004 | Verify the login page renders without crashing. | 1. Import the Login component. <br> 2. Import render from @testing-library/react. <br> 3. Use render(<Home />) to render the component. <br> 4. Observe if any errors occur during rendering.| N/A |The Login page renders successfully without any errors or crashes. | The Login page renders without crashing. | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#login-page) |
| Test-005 | Verify the Sign Up page renders without crashing. | 1. Import the SignUp component. <br> 2. Import render from @testing-library/react. <br> 3. Use render(<Home />) to render the component. <br> 4. Observe if any errors occur during rendering.| N/A |The Sign Up page renders successfully without any errors or crashes. | The Sign Up page renders without crashing. | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#login-page) |

## Integration tests

| ID  | Description | Steps | Input Values | Expected Output | Actual Output | Pass/Fail | Requirement Link |
| :-------------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: |
| Test-006 | Posting user data returns success | 1. Authenticate user using signInWithEmailAndPassword. <br> 2. Call PostUserData with UserData. <br> 3. Validate response code. | currentUser (authenticated user), UserData JSON | Response status 200 (Success) | 200 | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#login-page-1) |
| Test-007 | Get user data returns previously posted data | 1. Authenticate user using signInWithEmailAndPassword. <br> 2. Call PostUserData. <br> 3. Call GetUserData. <br> 4. Compare response to UserData.| currentUser (authenticated user), UserData JSON | Resonse matches the UserData JSON | Matches | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#login-page-1) |
| Test-008 | Finace advice returns a response | 1. Authenticate user using signInWithEmailAndPassword. <br> 2. Call GetFinanceAdvice. <br> 3. Validate that the response is not null/undefined.| currentUser (authenticated user) | GetFinanceAdvice returns any non-null data | Data returned | Pass | [link](https://github.com/johnsas5/GVSU-CIS350-SHARPPYTHONS/blob/main/docs/software_requirements_specification_final.md#financial-form-1) |

