import os

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langgraph.graph import END, StateGraph

from backend.app.agents.state import AgentState

load_dotenv("backend/.env")


llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY"),
)


def chat_node(state: AgentState) -> AgentState:
    user_message = state["message"]

    response = llm.invoke(user_message)

    return {
        "message": user_message,
        "response": response.content,
    }


graph_builder = StateGraph(AgentState)

graph_builder.add_node("chat_node", chat_node)

graph_builder.set_entry_point("chat_node")
graph_builder.add_edge("chat_node", END)

agent_graph = graph_builder.compile()