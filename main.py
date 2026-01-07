from flask import Flask
from waitress import serve
from routes.handler import webapp
import os
import asyncio
import threading


def create_app():
    app = Flask(
        __name__,
        template_folder="templates"
    )
    app.register_blueprint(webapp)
    return app


app = create_app()


if __name__ == "__main__":
    HOST = "0.0.0.0"
    PORT = int(os.getenv("PORT", 3000))
    print(f"Server running on http://{HOST}:{PORT}")

    # Start Flask server (blocking)
    serve(app, host=HOST, port=PORT)
