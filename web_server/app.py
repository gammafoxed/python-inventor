from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', title='Index')


@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects')


@app.route('/something')
def something():
    return render_template('something.html', title='Something')


@app.route('/inventor')
def inventor():
    return render_template('inventor.html', title='Inventor')


def start():
    app.run(debug=True)
