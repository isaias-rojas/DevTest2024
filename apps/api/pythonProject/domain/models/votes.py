from pydantic import BaseModel, EmailStr


class Vote(BaseModel):
    option_id: int
    voter_email: EmailStr

class CreateVote(BaseModel):
    option_id: int
    voter_email: EmailStr