import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please provide a valid poll name",
  }),
  option: z.string().min(1),
});

export default function NewPoll() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">Add new</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New Poll</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <div>
              <Button type="button" variant="link">
                Cancel
              </Button>
              <Button type="button" variant="link">
                Save
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
