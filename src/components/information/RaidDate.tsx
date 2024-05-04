import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { RangeDatePicker } from "../ui/RangeDatePicker";
import { DateRange } from "react-day-picker";
import { formatDate } from "@/src/utils/dateFormat";
import { CardLayout } from "./CardLayout";

export const RaidDate = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <CardLayout label="Date du raid">
      {isEdit ? (
        <>
          <RangeDatePicker dateRange={dateRange} setDateRange={setDateRange} />
          <Button className="mt-2 w-[120px]" onClick={toggleEdit}>
            Valider
          </Button>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold">
            {dateRange && dateRange.from && dateRange.to ? (
              formatDate(dateRange.from.toString()) +
              " - " +
              formatDate(dateRange.to.toString())
            ) : (
              <span>Période non définie</span>
            )}
          </div>
          <Button
            variant="outline"
            className="mt-4 w-[120px]"
            onClick={toggleEdit}
          >
            Modifier
          </Button>
        </>
      )}
    </CardLayout>
  );
};
