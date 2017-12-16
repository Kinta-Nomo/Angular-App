from flask import Flask, render_template,request
app = Flask(__name__)

app=Flask(__name__)

@app.route('/')
def start():
    return render_template("/Angular.html")
    
@app.route('/secret')
def secret():
    return render_template("/Secret.html")
    
    
if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)
