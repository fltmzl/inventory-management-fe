"use client";

import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
// import { DateRangePicker, DateValue, RangeValue } from "@nextui-org/react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { DateValue, Input, RangeCalendar, RangeValue } from "@nextui-org/react";

function DateRange() {
  // const [value, setValue] = React.useState<RangeValue<DateValue>>({
  //   start: parseDate("2024-04-01"),
  //   end: parseDate("2024-04-08"),
  // });

  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [isDateShown, setIsDateShown] = React.useState(false);

  return (
    // <DateRangePicker
    //   defaultValue={{
    //     start: parseDate("2024-04-01"),
    //     end: parseDate("2024-04-08"),
    //   }}
    //   label="Date range (controlled)"
    // />

    <div className="bg-red-400">
      <Input className="w-full max-w-xs" size="md" type="text" label="Tanggal" placeholder="mm/dd/yyyy - mm/dd/yyyy" onFocus={() => setIsDateShown(true)} onBlur={() => setIsDateShown(false)} />

      {isDateShown && (
        <DateRangePicker
          onChange={(item) => {
            setDate([item.selection]);
            console.log(item);
          }}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={date}
          direction="horizontal"
        />
      )}
    </div>
  );
}

export default DateRange;
