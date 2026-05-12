from fastapi import APIRouter
from app.schemas.analysis_schema import AnalysisRequest
from app.services.openai_service import analyze_health

router = APIRouter()


@router.post("/analyze")
async def analyze(data: AnalysisRequest):
    result = analyze_health(data)

    return {
        "success": True,
        "data": result,
    }