import { Poll } from "@/lib/types";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please provide a valid poll name",
  }),
  option: z.string().min(1),
});

export default function Vote(data: Poll) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">
          <b>Vote: {data.name}</b>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <b>Vote: </b>
          </DialogTitle>
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
