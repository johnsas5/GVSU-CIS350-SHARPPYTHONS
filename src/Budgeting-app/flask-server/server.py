import json
import firebase_admin
from urllib import response
from flask import Flask, make_response
from firebase_admin import db


#I just worked around the boilerplate code that was already here,
#we will need to discuss this as I didn't write any of that code
#and am not sure what it is for at the moment.

app = Flask(__name__)

#saves a path to our service account key to authenticate the app
#with the server
service_account_key_path = "new_private_key/sharppythons-firebase-adminsdk-1yoay-807f2b4b03.json"
cred_obj = firebase_admin.credentials.Certificate(service_account_key_path)
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL' : 'https://sharppythons-default-rtdb.firebaseio.com'
	})


#Ref will reference the root directory of our database
#"/user_data" will be used to hold our user data
ref = db.reference("/")


class User:

	def __init__(self, user_token):
		self.user_token = user_token
		self.data = self.authenticate_pull_request()
		self.categories = []
		self.income = self.data['TotalMonthlyIncome']
		self.categories.append(self.income)
		self.age = self.data['Age']
		self.categories.append(self.age)
		self.expenses = self.data['TotalMonthlyExpenses']
		self.housing = self.data['Housing']
		self.categories.append(self.housing)
		self.utilities = self.data['Utilities']
		self.categories.append(self.utilities)
		self.transportation = self.data['Transportation']
		self.categories.append(self.transportation)
		self.food = self.data['Food']
		self.categories.append(self.food)
		self.debt_repayment = self.data['Debt Repayment']
		self.categories.append(self.debt_repayment)
		self.insurance = self.data['Insurance']
		self.categories.append(self.insurance)
		self.health_and_wealth = self.data['Health and Wealth']
		self.categories.append(self.health_and_wealth)
		self.entertainment = self.data['Entertainment']
		self.categories.append(self.entertainment)
		self.education = self.data['Education']
		self.categories.append(self.education)
		self.investments = self.data['Investments']
		self.categories.append(self.investments)
		self.family_expenses = self.data['Family Expenses']
		self.categories.append(self.family_expenses)
		self.other = self.data['Other']
		self.categories.append(self.other)

	def percent_of_total_expenses(self):
		result = []
		if self.expenses > 0:
			for i in self.categories:
				result.append(i)
				return result
			return 0
		#Function to authenticate a push request to the server
		#Takes the user_data as a json file path
	def authenticate_push_request(self):
		#Authenticates user_token passed from web app

		#if firebase_admin can authenticate the token with no errors,
		#auth.verify_id_token(user_token) should hold a value, if not
		#firebase_admin failed to authenticate that token
		if (auth.verify_id_token(self.user_token)):
			#saves the authenticated user_token
			decoded_token = auth.verify_id_token(self.user_token)

			#extracts the user id from the self.user_token
			uid = decoded_token['uid']

			#data will be saved under /user_data/uid for each user
			ref = db.reference(f'/user_data/%s', uid)

			#Loads the user data JSON file
			with open(user_data) as f:
				file_contents = json.load(f)
			#Saves the file under user_data/uid,
			#Will overwrite anything that is already there, not sure
			#if this will be an issue yet.
			ref.set(file_contents)
			#Return exit code 200 if push was succesful
			return 200
		else:
			#Return exit code 0 if unable to authenticate request
			return 402
	def authenticate_pull_request(self):
		#Check to see if firebase can authenticate the token
		if(auth.verify_id_token(self.user_token)):
			#Extracts token
			decoded_token = auth.verify_id_token(self.user_token)
			#Extracts user_id from token
			uid = decoded_token['uid']
			#Sets the reference point to user_data/user_id
			ref = db.reference(f'/user_data/%s', uid)
			#Returns data stored under /user_data/user_id
			return ref.get()
		else:
			#Returns exit code 0 if unable to authenticate request
			return 402
#Takes an authorization token and returns the user id for that token
	def get_user_id(self):
		if (auth.verify_id_token(self.user_token)):
			decoded_token = auth.verify_id_token(self.user_token)
			uid = decoded_token['uid']
			return uid
		else:
			return 402


###App Routes###

#Example Route
@app.route("/members")
def members():
	data = {"members": ["Member1", "Member2", "Member3"]}
	response = make_response(json.dumps(data))
	response.headers['Content-Type'] = 'application/json'
	return response

#flask financialData route for GET method

@app.route('/FinancialData', methods=['GET'])
def GetFinancialData():
  #get firebase token id from header
  #verify firebase token still valid
  #get data based on uid
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
	return Response

#flask financialData route for POST method

@app.route('/FinancialData', methods=['POST'])
def PostFinancialData():
  #get firebase token id from header
  #verify firebase token still valid
  #save data to firebase based on uid
  #return flask response object: response status code (can create response object yourself of use jsonify function)
	return Response

#flask financeAdvice route for GET methods

@app.route('/FinanceAdvice', methods=['GET'])
def GetFinancialAdvice():
  #get firebase token id from header
  #verify firebase token still valid
  #formulate financial advice based on user dataw
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
	return Response

#flask retirementData route for GET methods

@app.route('/RetirementData', methods=['GET'])
def GetRetirementData():
  #get firebase token id from header
  #verify firebase token still valid
  #generate data for graph based on retirement calculation using current monthly savings data
  #return data should be two arrays, one for years (2025, 2026... to retirement year), the other dollars
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
	return Response



if __name__ == "__main__":
  app.run(debug=True)
