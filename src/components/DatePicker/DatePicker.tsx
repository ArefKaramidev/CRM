import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "phosphor-react";
import {
  Button,
  DatePicker,
  Popover,
  PopoverAction,
  PopoverContent,
} from "keep-react";
import { style } from "@mui/system";

export const DatePickerComponent = () => {
  const [date, setDate] = useState<Date>();
  return (
    <Popover defaultOpen>
      <PopoverAction
        asChild
        className="shadow-lg rounded-lg flex items-center justify-center py-5 duration-200  active:shadow-none"
      >
        <Button
          color="secondary"
          size="lg"
          className="w-[21rem] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline"
        >
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? (
            format(date ?? new Date(), "PPP")
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverAction>
      <PopoverContent
        align="start"
        className="max-w-min border-0 absolute w-[21rem] border-none outline-none h-[22rem] top-full "
        side="bottom"
      >
        <DatePicker
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={false}
        />
      </PopoverContent>
    </Popover>
  );
};
