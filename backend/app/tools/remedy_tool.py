from langchain_core.tools import tool


@tool
def home_remedy_tool(condition: str) -> str:
    """
    Suggests simple home remedies for minor conditions.
    """

    return (
        f"Home Remedy Tool:\n\n"
        f"For '{condition}', consider rest, adequate hydration, "
        f"and consult a healthcare professional if symptoms worsen."
    )