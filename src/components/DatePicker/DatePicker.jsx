import React, { useState } from "react";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon="fa fa-calendar"
    />
  );
};

export default DatePicker;
