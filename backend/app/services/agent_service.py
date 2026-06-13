from backend.app.agents.graph import agent_graph
from backend.app.tools.hospital_tool import hospital_finder_tool
from backend.app.tools.medical_tool import medical_info_tool
from backend.app.tools.remedy_tool import home_remedy_tool


def run_agent(message: str) -> str:
    user_input = message.lower()

    if "hospital" in user_input:
        return hospital_finder_tool.invoke(
            {"location": message}
        )

    if (
        "home remedy" in user_input
        or "remedy" in user_input
        or "sore throat" in user_input
        or "cold" in user_input
    ):
        return home_remedy_tool.invoke(
            {"condition": message}
        )

    if (
        "what is" in user_input
        or "symptom" in user_input
        or "dehydration" in user_input
        or "fever" in user_input
    ):
        return medical_info_tool.invoke(
            {"query": message}
        )

    result = agent_graph.invoke(
        {
            "message": message,
            "response": "",
        }
    )

    return result["response"]