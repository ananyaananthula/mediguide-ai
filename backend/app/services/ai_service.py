import os

from dotenv import load_dotenv
from google import genai

load_dotenv("backend/.env")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in backend/.env")

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_ai_response(user_message: str) -> str:
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=user_message,
        )

        if response.text:
            return response.text.strip()

        return "Sorry, I couldn't generate a response."

    except Exception as error:
        return f"AI service error: {str(error)}"