from typing import List

from pydantic import BaseModel, Field

from domain.models.options import Option, CreateOption


class Poll(BaseModel):
    id: int
    name: str
    options: List[Option]


class CreatePoll(BaseModel):
    name: str =  Field(min_length=1)
    options: List[CreateOption] = Field(min_length=2)