from langchain_core.tools import tool


@tool
def hospital_finder_tool(location: str) -> str:
    """
    Simulates finding nearby hospitals.
    """

    return (
        f"Hospital Finder Tool:\n\n"
        f"Searching for hospitals near '{location}'. "
        f"(This is currently a placeholder tool. "
        f"Real hospital search will be added in a later phase.)"
    )