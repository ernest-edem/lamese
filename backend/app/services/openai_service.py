from openai import OpenAI
from app.core.config import OPENAI_API_KEY
import json

client = OpenAI(api_key=OPENAI_API_KEY)


def analyze_health(data):
    prompt = f"""
    You are an advanced medical AI assistant.

    Analyze the following patient data:

    Age: {data.age}
    Sex: {data.sex}
    Symptoms: {data.symptoms}

    Return ONLY valid JSON in this exact format:

    {{
      "disease": "",
      "risk_score": 0,
      "risk_level": "",
      "confidence": 0,
      "explanation": "",
      "recommendations": [
        "",
        ""
      ]
    }}

    No markdown.
    No explanation outside JSON.
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "system",
                "content": "You are a medical AI assistant.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.3,
    )

    content = response.choices[0].message.content

    return json.loads(content)