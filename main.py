from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def landing_page():
    return render_template("index.html")

@app.route('/about')
def about_page():
    return render_template("about.html")

@app.route('/dashboard')
def dashboard():
    return "Dashboard Coming Soon!"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
