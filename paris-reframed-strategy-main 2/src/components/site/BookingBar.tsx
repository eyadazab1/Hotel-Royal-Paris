import { useState, type ReactNode } from "react";
import { CalendarDays, Sparkles, Users } from "lucide-react";

export function BookingBar({ floating = false }: { floating?: boolean }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div
      className={
        floating ? "lux-panel rounded-[2rem] p-3 md:p-4" : "lux-card rounded-[2rem] p-3 md:p-4"
      }
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-3 md:grid-cols-[1.1fr_1.1fr_0.9fr_auto] md:items-end"
      >
        <Field
          icon={<CalendarDays className="h-4 w-4 text-brass" strokeWidth={1.9} />}
          label="Arrival"
          type="date"
          value={checkIn}
          onChange={setCheckIn}
        />
        <Field
          icon={<CalendarDays className="h-4 w-4 text-brass" strokeWidth={1.9} />}
          label="Departure"
          type="date"
          value={checkOut}
          onChange={setCheckOut}
        />
        <Field
          icon={<Users className="h-4 w-4 text-brass" strokeWidth={1.9} />}
          label="Guests"
          value={guests}
          onChange={setGuests}
          select
        />
        <button type="submit" className="lux-button h-[4.75rem] w-full px-7 md:w-auto">
          Check Availability
        </button>
      </form>
      <div className="mt-3 flex flex-wrap items-center gap-3 px-2 text-xs text-foreground/60">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-brass" strokeWidth={2} />
          Direct booking includes best-rate promise
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-foreground/20 md:block" />
        <span>Free cancellation up to 48 hours</span>
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  value,
  onChange,
  type = "text",
  select = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  select?: boolean;
}) {
  return (
    <label className="lux-card flex cursor-text flex-col rounded-[1.5rem] px-5 py-4">
      <span className="flex items-center gap-2 text-foreground/55">
        {icon}
        <span className="eyebrow text-foreground/55">{label}</span>
      </span>
      {select ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 bg-transparent font-serif text-lg text-foreground outline-none"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 bg-transparent font-serif text-lg text-foreground outline-none placeholder:text-foreground/40"
          placeholder={type === "date" ? "Select date" : ""}
        />
      )}
    </label>
  );
}
