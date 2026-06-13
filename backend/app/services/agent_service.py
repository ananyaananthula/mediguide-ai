from backend.app.agents.graph import agent_graph


def run_agent(message: str) -> str:
    result = agent_graph.invoke(
        {
            "message": message,
            "response": "",
        }
    )

    return result["response"]