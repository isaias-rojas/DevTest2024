from typing import List

from fastapi import FastAPI, Body
from starlette import status

from domain.models.options import Option
from domain.models.polls import Poll, CreatePoll
from domain.models.votes import CreateVote

POLLS = [
    Poll(id=1 ,
         name="Favorite Programming Language",
         options=[
             Option(id=1, name="C#", votes=200),
             Option(id=2, name="Java", votes=122),
             Option(id=3, name="JavaScript", votes=2),
             Option(id=4, name="Typescript", votes=100)
         ]
    ),
    Poll(id=2,
         name="Favorite Framework",
         options=[
             Option(id=1, name="Angular#", votes=200),
             Option(id=2, name="Nextjs", votes=122),
             Option(id=3, name="Nuxt", votes=2),
             Option(id=4, name="FastAPI", votes=100)
         ]
    ),
    Poll(id=3,
         name="Favorite company",
         options=[
             Option(id=1, name="Google", votes=200),
             Option(id=2, name="Meta", votes=122),
             Option(id=3, name="Coursera", votes=2),
             Option(id=4, name="Netflix", votes=100)
         ]
    ),
]

app = FastAPI(
    title= "Jala test",
    description="Jala test nov 9",
    version="1.0.0",
)


@app.get("/api/v1/polls", response_model=List[Poll], status_code=status.HTTP_200_OK)
async def get_all_polls():
    return POLLS


# @app.post("/api/v1/polls", status_code=status.HTTP_201_CREATED, response_model=Poll)
# async def create_poll(poll: CreatePoll = Body()):
#     new_poll_id = len(POLLS)
#     new_options = [
#         Option(
#             id=idx
#             name=option.name,
#             vote=0,
#         )
#         for idx, option in enumerate(poll.options)
#     ]
#
#     options = poll.options
#     new_options = []
#     for i,option in enumerate(options):
#         options_ax = Option()
#         options_ax.name = option.name
#         options_ax.votes = 0
#         new_options.append(options_ax)
#     new_poll = Poll()
#     new_poll.options = new_options
#     new_poll.id = len(POLLS)
#     new_poll.name = poll.name
#
#     POLLS.append(new_poll)


def find_poll_by_id(poll: Poll):
    if len(POLLS) > 0:
        poll.id= POLLS[-1].id + 1
    else:
        poll.id = 1
    return poll

#
# @app.post("/api/v1/polls/{id}/votes")
# async def vote_poll(create_vote:CreateVote = Body()):
#