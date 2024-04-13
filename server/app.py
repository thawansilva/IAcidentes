from flask import Flask, request
import pandas as pd
from flask_cors import CORS

DATABASE_PATH = "../database/database.db"

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route("/")
@app.route("/visaogeral", methods=["GET"])
def visaogeral():
    year = request.args.get("year")
    region = request.args.get("region")
    # Resolver questão do pandas
    # Mudar a base de dados
    return {"text": "texto"}

if __name__ == '__main__':
    app.run(debug=True)