"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Option, Poll } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import NewPoll from "@/components/commons/new-poll";
import Vote from "@/components/commons/vote";
import { getPolls } from "@/lib/api";

const fetchPolls = async() => {
  const data = await fetch getPolls()

}

const polls: Poll[] = [
  {
    id: 1,
    name: "Favorite programming langauge",
    options: [
      { id: 1, name: "c#", votes: 150 },
      { id: 2, name: "java", votes: 75 },
      { id: 3, name: "f#", votes: 20 },
    ],
  },
  {
    id: 2,
    name: "Favorite functional programming langauge",
    options: [
      { id: 1, name: "scala", votes: 100 },
      { id: 2, name: "elix", votes: 75 },
      { id: 3, name: "haskell", votes: 200 },
    ],
  },
];

const getTotalVotes = (votes: Option[]) => {
  return votes.reduce((acc, current) => acc + current.votes, 0);
};

const getPercent = (votes: number, total: number) => {
  return Math.floor((votes / total) * 100);
};

export default function Home() {
  return (
    <div className="g  p-4">
      <div className="flex justify-between p-6">
        <div>
          <span className="font-bold text-lg">Polls List</span>
        </div>
        <NewPoll />
      </div>
      {polls.map((poll) => (
        <div
          className="col-span-2 flex items-center justify-center"
          key={poll.id}
        >
          <Card className="w-[600px]">
            <div className="flex justify-between gap-4 items-center mr-4">
              <CardHeader>
                <CardTitle className="text-xs">{poll.name}</CardTitle>
              </CardHeader>
              <Vote data={polls} />
            </div>

            <CardContent className="">
              {poll.options.map((option) => (
                <div className="flex flex-row justify-between" key={option.id}>
                  <div>{option.name}</div>
                  <div className="items-center ">
                    {getPercent(option.votes, getTotalVotes(poll.options))} %
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-end">
              <div>
                <span className="text-left">
                  Total votes: {getTotalVotes(poll.options)}
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
      ;
    </div>
  );
}
