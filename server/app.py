from flask import Flask, render_template, request
import sqlite3

DATABASE = "./database/database.db"
connection = sqlite3.connect(DATABASE)
db = connection.cursor()

app = Flask(__name__)

@app.route("/", methods=['GET'])
@app.route("/visaogeral", methods=["GET"])
def home():
    return render_template("index.html")
