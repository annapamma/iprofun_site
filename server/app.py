import pickle

from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# cors = CORS(app, resources={r"*/api/*": {"origins": "*"}})
# cors = CORS(app)

iprofun = {
    'luad': pickle.load(open('../data/pkl/LUAD.pkl', 'rb')),
}

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/<tumor>')
@cross_origin()
def table(tumor):
    return jsonify({'res': iprofun[tumor]})