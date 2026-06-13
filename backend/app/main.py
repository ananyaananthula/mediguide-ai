from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="MediGuide AI API",
    description="Backend API for the MediGuide AI healthcare assistant.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {
        "message": "Welcome to MediGuide AI API!",
        "status": "Backend is running successfully.",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "MediGuide AI backend is operational.",
    }