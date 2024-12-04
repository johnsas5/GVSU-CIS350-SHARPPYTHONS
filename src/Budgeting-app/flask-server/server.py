import json
import firebase_admin
from urllib import response
from flask import Flask, make_response, request, jsonify
from flask_cors import CORS
from firebase_admin import db, auth
from firebase_admin import credentials
import datetime


#I just worked around the boilerplate code that was already here,
#we will need to discuss this as I didn't write any of that code
#and am not sure what it is for at the moment.

app = Flask(__name__)
#enable cors for whole app
CORS(app)
old = "gs://sharppythons.appspot.com"
data_path = "https://sharppythons-default-rtdb.firebaseio.com"
#saves a path to our service account key to authenticate the app

service_account = {'serviceAccountId': 'firebase-adminsdk-1yoay@sharppythons.iam.gserviceaccount.com',}
#service_account_key_path = "firebase_api_key/sharppythons-firebase-adminsdk-1yoay-f17a0eec84.json"
service_account_key_path = "firebase_api_key/sharppythons-firebase-adminsdk-1yoay-38335f9e0e.json"
cred_obj = firebase_admin.credentials.Certificate(service_account_key_path)
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL' : data_path,
	'serviceAccountId': 'firebase-adminsdk-1yoay@sharppythons.iam.gserviceaccount.com',
	})




#Ref will reference the root directory of our database
#"/user_data" will be used to hold our user data
ref = db.reference("/")
user_data_folder = ref.child("user_data")
#admin_user_token = auth.verify_id_token(service_account['serviceAccountId'])




class User:

	def __init__(self, user_token):
		self.user_token = user_token
		#Pulls current data from the server, and fills variables
		self.data = self.authenticate_pull_request()
		user_data = self.data
		self.categories = {}
		#print("self data: ",user_data)

		#If the user_data is empty and returns NoneType, dont initialize the variables that depend on it
		if(user_data):

			self.income = int(user_data['income'])
			self.age = int(user_data['age'])
			self.expenses = int(user_data['expenses'])
			self.housing = int(user_data['housing'])
			self.categories.update({"housing":self.housing})
			self.utilities = int(user_data['utilities'])
			self.categories.update({"utilities":self.utilities})
			self.transportation = int(user_data['transportation'])
			self.categories.update({"transportation":self.transportation})
			self.food = int(user_data['food'])
			self.categories.update({"food":self.food})
			self.debt_repayment = int(user_data['debt_repayment'])
			self.categories.update({"debt_repayment":self.debt_repayment})
			self.insurance = int(user_data['insurance'])
			self.categories.update({"insurance":self.insurance})
			self.health_and_wealth = int(user_data['health_and_wealth'])
			self.categories.update({"health_and_wealth":self.health_and_wealth})
			self.entertainment = int(user_data['entertainment'])
			self.categories.update({"entertainment":self.entertainment})
			self.education = int(user_data['education'])
			self.categories.update({"education":self.education})
			self.investments = int(user_data['investments'])
			self.categories.update({"investments":self.investments})
			self.family_expenses = int(user_data['family_expenses'])
			self.categories.update({"family_expenses":self.family_expenses})
			self.other = int(user_data['other'])
			self.categories.update({"other":self.other})
			#Declares a variable to hold their monthly savings
			self.savings = 0
			#Saves their retirement year goal
			self.retirement_year = user_data['retirement_year']
			#Saves their current savings amount for retirement calculations
			self.cur_savings = user_data['cur_savings']
			#Calculates each expense as a percentage of their income
			#Also calculates the savings variable
			self.income_breakdown = self.percent_of_total_expenses()


	

	def percent_of_total_expenses(self):
		expense_percentages = {}
		income = self.income
		savings = income
		print("self categories: ", self.categories)
		if int(self.expenses) > 0:
			for name, amt in self.categories.items():
				savings -= amt
				amt = amt / income
				expense_percentages[name] = amt
			self.savings = savings
			return expense_percentages
		return 0
	
	def retirement_projection(self):
		current_year = int(datetime.datetime.now().year)
		yearly_savings = self.savings * 12
		compound_savings = self.cur_savings
		projection = {}
		while current_year <= self.retirement_year:
			compound_savings += yearly_savings
			projection.update({current_year : compound_savings})
			current_year += 1
		return projection
		


		#Function to authenticate a push request to the server
		#Takes the user_data as a json file path
	def authenticate_update_request(self, user_data):
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
			user_ref = user_data_folder.child(f"{uid}")
			

			#Loads the user data JSON file
			# with open(user_data) as f:
			# 	file_contents = json.load(f)
			#Saves the file under user_data/uid,
			#Will overwrite anything that is already there, not sure
			#if this will be an issue yet.

			#Updates the user's data with the new data passed from the front end, without overwriting previous data
			user_ref.update(user_data)
			#Return exit code 200 if push was succesful
			return "200"
		else:
			#Return exit code 0 if unable to authenticate request
			return "402"


	def authenticate_push_request(self, user_data):
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
			user_ref = user_data_folder.child(f"{uid}")
			

			#Loads the user data JSON file
			# with open(user_data) as f:
			# 	file_contents = json.load(f)
			#Saves the file under user_data/uid,
			#Will overwrite anything that is already there, not sure
			#if this will be an issue yet.

			#Replaces the user's data with the data passed from the front end:
			user_ref.set(user_data)
			#Return exit code 200 if push was succesful
			return "200"
		else:
			#Return exit code 0 if unable to authenticate request
			return "402"
	def authenticate_pull_request(self):
		#Check to see if firebase can authenticate the token
		if(auth.verify_id_token(self.user_token)):
			#Extracts token
			decoded_token = auth.verify_id_token(self.user_token)
			#Extracts user_id from token
			uid = decoded_token['uid']
			#Sets the reference point to user_data/user_id
			user_ref = db.reference(f'/user_data/{uid}')
			#Returns data stored under /user_data/user_id
			return user_ref.get()
		else:
			#Returns exit code 0 if unable to authenticate request
			return "402"
#Takes an authorization token and returns the user id for that token
	def get_user_id(self):
		if (auth.verify_id_token(self.user_token)):
			decoded_token = auth.verify_id_token(self.user_token)
			uid = decoded_token['uid']
			return uid
		else:
			return "402"


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
	#Gets any data from the header
	# data = request.json
	#get firebase token id from header
	#Gets the id_token from the request header
	id_token = request.headers.get('Authorization')
	#verify firebase token still valid#verify firebase token still valid
	#If authorization fails, return exit code 402
	if not id_token:
		response = make_response("402")
		return response
	#Grabs just the user_token from the header
	user_token = id_token.split('Bearer ')[-1]

	#get data based on uid
	cur_user = User(user_token)
	#gets the data currently stored on the firebase database
	user_data = cur_user.authenticate_pull_request()
	
#return flask response object: set data and response status code 
#(can create response object yourself of use jsonify function)

	response = make_response(json.dumps(user_data))
	#response.headers['Content-Type'] = 'application/json'
	return response
  


#Demonstrates the ability to add new users, and update their user information saved on the rt database
#New users can be added successfully
#New data for a user can be added by navigating to the folder matching the users uid, and using the set method
#User data can be retrieved in the same way as setting new data, only with the get method instead.

#Integration Testing:
#Move to unit test file
@app.route('/test', methods=['GET'])
def testing():
	#My personal user id for testing purposes
	sample_user_id = "euHbYv2SpcX3d46YMbdv49ryecd2"
	#user = auth.get_user(sample_user_id)
	user_token = auth.create_custom_token(sample_user_id)
	user_ref = user_data_folder.child(sample_user_id)
	user_data = {"Income" : 4000, "TotalExpense" : 800, 'Rent' : 800}
	#user_data = json.dumps(user_data)
	
	#Currently getting an error stating that there is an invalid JWT signature
	#Error fixed by generating a new service account key and keeping it hidden, it will no longer work when I upload the code because that will
	#Expose the new service account key. In the future we will have to make a new key every time we want to test the back end.
	user_ref.set(user_data)
				
	user_data = user_ref.get()

	#Testing adding a second user and storing their data
	# new_user_id = "WbkVAPKPCxWk2DUiDICb0B4SLiz2"
	# new_user_ref = user_data_folder.child(new_user_id)
	# new_user_data = {"Income" : 2500, "TotalExpense" : 1000, 'Rent' : 800, "Utilities" : 200}
	# #new_user_data = json.dumps(new_user_data)

	# new_user_ref.set(new_user_data)
	
	return user_data

  

#flask financialData route for POST method

@app.route('/FinancialData', methods=['POST'])
def PostFinancialData():
	#Gets data file from header
	data_token = request.json
	data = data_token
  #get firebase token id from header
	#Gets the id_token from the request header
	id_token = request.headers.get('Authorization')
	#verify firebase token still valid
	#If authorization fails, return exit code 402
	if not id_token:
		response = make_response("402")
		return response
	#Grabs just the user_token from the header
	user_token = id_token.split('Bearer ')[-1]

	#save data to firebase based on uid, this is for initial population only
	cur_user = User(user_token)
	user_data = cur_user.authenticate_push_request(data)
	
#return flask response object: set data and response status code 
#(can create response object yourself of use jsonify function)
	response = make_response(json.dumps(user_data))
	#response.headers['Content-Type'] = 'application/json'
	return response


#Flask incomeSummary route for GET methods
@app.route('/IncomeSummary', methods = ['GET'])
def GetIncomeSummary():
	#getting data from header for user class:
	data = request.json

	#get firebase token id from header
	id_token = request.headers.get('Authorization')
	#verify firebase token still valid
	#verify firebase token still valid
	#If authorization fails, return exit code 402
	if not id_token:
		response = make_response("402")
		return response
	#Grabs just the user_token from the header
	user_token = id_token.split('Bearer ')[-1]

	#creates a user instance based on token from header
	cur_user = User(user_token)

	#calls the percent_of_total_expenses() method and saves the result
	user_data = cur_user.percent_of_total_expenses()
	#returns a json file with all the expenses listed as percentages
	response = make_response(json.dumps(user_data))
	return response
	#If the result is 0, there are no expenses stored

@app.route('/updateFinancialData', methods=['POST'])
def UpdateFinacialData():
	id_token = request.headers.get("Authorization")
	#Outdated method:
	# data_token = request.headers.get('Data')
	# data = data_token.slice('Data ')[-1]

	#Pulls data from request
	data = request.json
	if not id_token:
		response = make_response("402")
		return response
	
	user_token = id_token.split('Bearer ')[-1]
	cur_user = User(user_token)
	cur_user.authenticate_update_request(data)
	response = make_response('200')
	return response



#flask financeAdvice route for GET methods

@app.route('/FinanceAdvice', methods=['GET'])
def GetFinancialAdvice():
	#Getting data from header
	#data = request.json
   #get firebase token id from header
	id_token = request.headers.get('Authorization')
	#verify firebase token still valid
	#If authorization fails, return exit code 402
	if not id_token:
		response = make_response("402")
		return response
	#Grabs just the user_token from the header
	user_token = id_token.split('Bearer ')[-1]

	#creates a user instance based on token from header
	user = User(user_token)
	
#   #formulate financial advice based on user data

#Check their age, if they are 25 years old or younger, case1, if not, case2
	#Case1
	if user.age <= 25:
		#If the user currently has monthly savings:
		if user.savings > 0:
			#if savings is less than 20% of their income, encourage them to save more
			if user.savings < (0.20 * user.income):
				#get top three expenses:
				expenses = user.categories
				#Gets highest expense
				max1 = 0
				max1Name = ''
				for name, amt in expenses.items():
					if amt >= max1:
						max1 = amt
						max1Name = name
				expenses.pop(max1Name)

				#Gets second highest:
				max2 = 0
				max2Name = ''
				for name, amt in expenses.items():
					if amt >= max2:
						max2 = amt
						max2Name = name

				#Gets third highest:
				max3 = 0
				max3Name = ''
				for name, amt in expenses.items():
					if amt >= max3:
						max3 = amt
						max3Name = name

				financial_advice = f'It appears you are currently not meeting your savings goals, is there any way you can reduce the following expenses?: {max1Name}, {max2Name}, {max3Name}'
			else:
				financial_advice = f'It appears that you are currently meeting your savings goals, great work!'	
	#If user is older than 25, push less agressive saving:
	else:
	#if savings is less than 10% of their income, encourage them to save more
		if user.savings < (0.10 * user.income):
			#get top three expenses:
			expenses = user.categories
			#Gets highest expense
			max1 = 0
			max1Name = ''
			for name, amt in expenses.items():
				if amt >= max1:
						max1 = amt
						max1Name = name
				expenses.pop(max1Name)

				#Gets second highest:
			max2 = 0
			max2Name = ''
			for name, amt in expenses.items():
				if amt >= max2:
					max2 = amt
					max2Name = name

				#Gets third highest:
			max3 = 0
			max3Name = ''
			for name, amt in expenses.items():
				if amt >= max3:
					max3 = amt
					max3Name = name

			financial_advice = f"It appears you are currently not meeting your savings goals, is there any way you can reduce the following expenses?: {max1Name}, {max2Name}, {max3Name}"
		else:
			financial_advice = f'It appears that you are currently meeting your savings goals, great work!'
	response = make_response(financial_advice)
	return response
		
#case1:
#verify that they have monthly savings, if it is less than 20% of their monthly income, encourage them to save more
#Check their expenses list, and determine the top 3 largest spending categories, then suggest the user reduce them

#Else Inform them that their savings goals have been met

#case2: verify that they have monthly savings, if it is less than 10% of their monthly income, encourage them to save more
#Check their expenses list, and determine the top 3 largest spending categories, then suggest the user reduce them
#Else inform them that their savings goals have been met.


#   #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
# 	#return Response
# 	return "0"


#flask retirementData route for GET methods

@app.route('/RetirementData', methods=['GET'])
def GetRetirementData():
	#Getting data from header
	#data = request.json
	id_token = request.headers.get("Authorization")
	if not id_token:
		response = make_response("402")
		return response
	
	user_token = id_token.split('Bearer ')[-1]
	cur_user = User(user_token)
	#Returns a json file with the year as the key and the savings amount as the value 
	#has a key value pair for each year from the current year up until their goal retirement year
	projections = cur_user.retirement_projection()
	response = make_response(json.dumps(projections))
	response.headers['Content-Type'] = 'application/json'
	return response
  #get firebase token id from header
  #verify firebase token still valid
  #generate data for graph based on retirement calculation using current monthly savings data
  #return data should be two arrays, one for years (2025, 2026... to retirement year), the other dollars
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
	#return Response
	

if __name__ == "__main__":
	app.run(debug=True)
