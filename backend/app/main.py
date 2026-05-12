from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.analysis import router as analysis_router

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes

app.include_router(analysis_router)

@app.get("/")
async def root():
    return {
        "message": "LAMESE AI Backend Running"
    }