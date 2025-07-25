"use client";

import { useState, useEffect } from "react";

interface ClientDateProps {
  dateString: string | undefined;
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
  type?: "date" | "datetime";
}

const ClientDate: React.FC<ClientDateProps> = ({
  dateString,
  locale = "en-US",
  options = { year: "numeric", month: "long", day: "numeric" },
  type = "date",
}) => {
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      if (type === "date") {
        setFormatted(date.toLocaleDateString(locale, options));
      } else if (type === "datetime") {
        setFormatted(date.toLocaleString(locale));
      }
    }
  }, [dateString, locale, options, type]);

  return <>{formatted}</>;
};

export default ClientDate;
