from fastapi import APIRouter
from pydantic import BaseModel

from backend.app.services.agent_service import run_agent

router = APIRouter(
    prefix="/chat",
    tags=["AI Assistant"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.get("/")
def chat_info():
    return {
        "message": "LangGraph AI Agent endpoint is active."
    }


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    ai_response = run_agent(request.message)

    return ChatResponse(
        response=ai_response
    )