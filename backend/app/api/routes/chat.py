from fastapi import APIRouter

from backend.app.models.chat import ChatRequest, ChatResponse
from backend.app.services.ai_service import generate_ai_response

router = APIRouter(
    prefix="/chat",
    tags=["AI Assistant"]
)


@router.get("/")
def chat_info():
    return {
        "message": "MediGuide AI chat endpoint is ready.",
        "status": "Gemini AI integration enabled."
    }


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    ai_reply = generate_ai_response(request.message)
    return ChatResponse(
        response=ai_reply
    )