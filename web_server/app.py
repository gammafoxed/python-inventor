from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get_data')
def get_data():
    return "Lol Kek"


@app.route('/projects')
def projects_page():
    return render_template('projects.html')


def start():
    app.run(debug=True)
