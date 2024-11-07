from abc import ABC, abstractmethod
from flask import Flask, Response

app = Flask(__name__)

#This is an interface example for the server, don't edit this file.
#Only used for reference

#flask financialData route for GET method
@abstractmethod
@app.route('/FinancialData', methods=['GET'])
def GetFinancialData():
  #get firebase token id from header
  #verify firebase token still valid
  #get data based on uid
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
  return Response

#flask financialData route for POST method
@abstractmethod
@app.route('/FinancialData', methods=['POST'])
def PostFinancialData():
  #get firebase token id from header
  #verify firebase token still valid
  #save data to firebase based on uid
  #return flask response object: response status code (can create response object yourself of use jsonify function)
  return Response

#flask financeAdvice route for GET methods
@abstractmethod
@app.route('/FinanceAdvice', methods=['GET'])
def GetFinancialData():
  #get firebase token id from header
  #verify firebase token still valid
  #formulate financial advice based on user data
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
  return Response

#flask retirementData route for GET methods
@abstractmethod
@app.route('/RetirementData', methods=['GET'])
def GetRetirementData():
  #get firebase token id from header
  #verify firebase token still valid
  #generate data for graph based on retirement calculation using current monthly savings data
  #return data should be two arrays, one for years (2025, 2026... to retirement year), the other dollars
  #return flask response object: set data and response status code (can create response object yourself of use jsonify function)
  return Response