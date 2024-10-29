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
service_account_key_path = "/flask-server/private_key/sharppythons-firebase-adminsdk-1yoay-a2c4b5b9ee.json"
cred_obj = firebase_admin.credentials.Cerftificate(service_account_key_path)
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL' : databaseURL
	})


#Ref will reference the root directory of our database
#"/user_data" will be used to hold our user data
ref = db.reference("/")


#Not sure what this is for currently
@app.route("/members")
def members():
  data = {"members": ["Member1", "Member2", "Member3"]}
  response = make_response(json.dumps(data))
  response.headers['Content-Type'] = 'application/json'
  return response

#Function to authenticate a push request to the server
#Takes the user_data as a json file path
def authenticate_push_request(user_data, user_token):
	#Authenticates user_token passed from web app

	#if firebase_admin can authenticate the token with no errors,
	#auth.verify_id_token(user_token) should hold a value, if not
	#firebase_admin failed to authenticate that token
	if (auth.verify_id_token(user_token)):
		#saves the authenticated user_token
		decoded_token = auth.verify_id_token(user_token)

		#extracts the user id from the user_token
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
		#Return exit code 1 if push was succesful
		return 1
	else:
		#Return exit code 0 if unable to authenticate request
		return 0
def authenticate_pull_request(user_token):
	#Check to see if firebase can authenticate the token
	if(auth.verify_id_token(user_token)):
		#Extracts token
		decoded_token = auth.verify_id_token(user_token)
		#Extracts user_id from token
		uid = decoded_token['uid']
		#Sets the reference point to user_data/user_id
		ref = db.reference(f'/user_data/%s', uid)
		#Returns data stored under /user_data/user_id
		return ref.get()
	else:
		#Returns exit code 0 if unable to authenticate request
		return 0
		
if __name__ == "__main__":
  app.run(debug=True)
