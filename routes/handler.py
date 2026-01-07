from flask import Blueprint, render_template, jsonify


webapp = Blueprint("web", __name__)

@webapp.route("/")
def index():
    return render_template("/index.html")

@webapp.route("/health")
def health():
    return jsonify(status="ok")

