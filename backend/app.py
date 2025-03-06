import os
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv  # Импортируем load_dotenv

load_dotenv()  # Загружаем переменные окружения из .env

app = Flask(__name__)
CORS(app, resources={r"/send": {"origins": "https://frantovskiy.com.ua"}})  # Разрешаем запросы только с указанного домена

# Инициализация лимитера
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["5 per minute"]  # Ограничение: 5 запросов в минуту
)

# Конфигурация для отправки почты
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS') == 'True'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)

@app.route('/send', methods=['POST'])
@limiter.limit("5 per minute")  # Ограничение для этого маршрута
def send_email():
    data = request.json
    subject = data.get('subject')
    message_body = data.get('message')

    msg = Message(subject, recipients=['office@frantovskiy.com.ua'])
    msg.body = message_body
    mail.send(msg)

    return jsonify({'status': 'success', 'message': 'Email sent successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
