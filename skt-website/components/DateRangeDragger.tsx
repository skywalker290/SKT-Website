"use client";

import React, { useState, useRef, useEffect } from "react";

export default function DateRangeDragger() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [endDate, setEndDate] = useState<Date | null>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 8);
    return d;
  });
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (clickedDate < startDate) {
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const isSelected = (day: number) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return (startDate && d.getTime() === startDate.getTime()) || (endDate && d.getTime() === endDate.getTime());
  };

  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return d > startDate && d < endDate;
  };

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const displayValue = startDate && endDate 
    ? `${formatDate(startDate)} - ${formatDate(endDate)}`
    : startDate ? `${formatDate(startDate)} - ...` : "Select Journey Dates";

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-bold text-on-surface mb-2 uppercase tracking-wider">
        Journey Dates (Range Picker)
      </label>
      <div 
        className="w-full bg-white rounded-xl border border-outline-ghost py-4 px-4 text-on-surface shadow-sm cursor-pointer hover:border-primary transition-all flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-sans font-medium">{displayValue}</span>
        <span className="material-symbols-outlined text-outline">calendar_month</span>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl border border-outline-variant/20 p-5 right-0 origin-top-right animate-in fade-in zoom-in-95 duration-200 text-on-surface">
          <div className="flex justify-between items-center mb-4">
            <button 
              type="button"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-1 hover:bg-surface-container rounded-full flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-on-surface">chevron_left</span>
            </button>
            <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface">
              {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h4>
            <button 
              type="button"
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-1 hover:bg-surface-container rounded-full flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-on-surface">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
              <span key={d} className="text-[0.6rem] font-bold text-on-surface-variant uppercase">{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {blanks.map(b => <div key={b} />)}
            {days.map(day => {
              const selected = isSelected(day);
              const inRange = isInRange(day);
              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`
                    h-9 w-9 text-xs rounded-lg flex items-center justify-center transition-all
                    ${selected ? 'bg-primary text-white font-bold' : ''}
                    ${inRange ? 'bg-primary/10 text-primary' : ''}
                    ${!selected && !inRange ? 'hover:bg-surface-container text-on-surface' : ''}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
            <div className="text-[0.65rem] text-on-surface-variant font-bold uppercase tracking-wider">
              {startDate && endDate ? `${Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))} Nights` : 'Select Range'}
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              disabled={!startDate || !endDate}
              className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
            >
              Apply
            </button>
          </div>

          <input type="hidden" name="departDate" value={startDate?.toISOString().split("T")[0] || ""} />
          <input type="hidden" name="returnDate" value={endDate?.toISOString().split("T")[0] || ""} />
        </div>
      )}
    </div>
  );
}
