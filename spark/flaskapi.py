from flask import Flask
#import sparkwork as sparky


app = Flask(__name__)

def worker(): 
    lst = [i for i in range(0,100)]
    return lst


@app.route("/open")
def hello_world():
    return worker()




    