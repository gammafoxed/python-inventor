from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_data')
def get_data():
    return "Lol Kek"


def start():
    app.run(debug=True)
