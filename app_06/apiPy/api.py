from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

alunos = [
    {"id": 1, "nome": "Sara", "media": 9.0},
    {"id": 2, "nome": "Vitória", "media": 8.0},
    {"id": 3, "nome": "Pedro", "media": 10},
]

@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

app.run(port=3000, debug=True)