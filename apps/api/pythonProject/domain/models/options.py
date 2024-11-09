from pydantic import BaseModel, Field


class Option(BaseModel):
    id: int
    name: str
    votes: int

class CreateOption(BaseModel):
    name: str = Field(min_length=1)
