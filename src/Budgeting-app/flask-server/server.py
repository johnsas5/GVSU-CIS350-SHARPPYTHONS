import json
from urllib import response
from flask import Flask, make_response

app = Flask(__name__)

@app.route("/members")
def members():
  data = {"members": ["Member1", "Member2", "Member3"]}
  response = make_response(json.dumps(data))
  response.headers['Content-Type'] = 'application/json'
  return response

if __name__ == "__main__":
  app.run(debug=True)