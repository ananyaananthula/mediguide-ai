from typing import TypedDict
import os

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import StateGraph, END

from backend.app.services.tools import (
    medical_info_tool,
    home_remedy_tool,
    hospital_finder_tool,
)

# Load environment variables from backend/.env
load_dotenv("backend/.env")

llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY"),
)


class AgentState(TypedDict):
    message: str
    response: str


def reasoning_node(state: AgentState):
    user_message = state["message"].lower()

    if any(word in user_message for word in [
        "dehydration", "fever", "cold", "flu",
        "headache", "diabetes", "blood pressure",
        "symptom", "disease"
    ]):
        return {
            "message": state["message"],
            "response": medical_info_tool(state["message"]),
        }

    if any(word in user_message for word in [
        "home remedy", "remedy", "natural cure",
        "home treatment"
    ]):
        return {
            "message": state["message"],
            "response": home_remedy_tool(state["message"]),
        }

    if any(word in user_message for word in [
        "hospital", "doctor", "clinic", "nearby"
    ]):
        return {
            "message": state["message"],
            "response": hospital_finder_tool(state["message"]),
        }

    prompt = f"""
You are MediGuide AI, an educational healthcare assistant.

Provide a clear, safe, concise answer.

User question:
{state["message"]}
"""

    ai_response = llm.invoke(prompt)

    return {
        "message": state["message"],
        "response": ai_response.content,
    }


graph = StateGraph(AgentState)
graph.add_node("reason", reasoning_node)
graph.set_entry_point("reason")
graph.add_edge("reason", END)

agent = graph.compile()


def run_agent(message: str):
    result = agent.invoke(
        {
            "message": message,
            "response": "",
        }
    )
    return result["response"]