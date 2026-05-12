from pydantic import BaseModel


class AnalysisRequest(BaseModel):
    age: int
    sex: str
    symptoms: str