#!/usr/bin/env python3
"""A python Flask program for hello world"""


from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    """Render a static file 0-index.html"""
    return render_template("/templates/0-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")