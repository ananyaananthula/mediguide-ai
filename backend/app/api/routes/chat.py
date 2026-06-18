from fastapi import APIRouter
from pydantic import BaseModel

from backend.app.services.agent_service import run_agent

router = APIRouter(
    prefix="/chat",
    tags=["AI Assistant"]
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str


@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    result = run_agent(request.message)
    return ChatResponse(response=result)