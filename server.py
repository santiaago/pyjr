import logging
import os

from flask import Flask
from flask import jsonify
from flask import request
from flask import send_from_directory

app = Flask('pyjr', '/app/build/')
app.secret_key = 'pyjr'

app.logger.setLevel(logging.INFO)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    try:
        print 'index: current requested path {}'.format(path)
        root_dir = os.getcwd()
        print 'index: current requested path {}'.format(root_dir)
        print 'index: {}'.format(os.path.join(root_dir, 'app', 'build'))

        print 'index: empty path'
        return send_from_directory(os.path.join(root_dir, 'app', 'build'), 'index.html')
    except Exception, e:
        print 'index: something something went wrong {}'.format(e)
            
@app.route('/static/<path:path>')
def static_proxy(path):
    try:
        print 'static_proxy: current requested path {}'.format(path)
        root_dir = os.getcwd()
        return send_from_directory(os.path.join(root_dir, 'app', 'build', 'static'), path)
    except Exception, e:
        print 'static_proxy: something something went wrong {}'.format(e)

@app.route('/api/players', methods=['GET'])
def players():
    print '/api/players requested'
    players =  [
        {'name': 'player1'},
        {'name': 'player2'},
        {'name': 'player2'}
    ]
    return jsonify(players = players)
