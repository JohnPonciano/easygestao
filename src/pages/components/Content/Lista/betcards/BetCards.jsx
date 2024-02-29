import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Filter, Calendar } from "lucide-react";

// BetDetails component
const BetDetails = ({ date, type }) => (
  <div className="flex gap-5 justify-between text-base font-bold text-gray-400">
    <div>
      <span className="font-medium text-neutral-200">{type}:</span>{" "}
      <span className="font-medium text-gray-400">$50</span>
    </div>
    <div>
      <span className="font-medium text-neutral-200">Saída:</span>{" "}
      <span className="font-medium text-gray-400">-</span>
    </div>
  </div>
);

// FilterModal component
const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleApply = () => {
    onApply(selectedFilter);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-900 text-white p-4 w-full max-w-md flex flex-col justify-center items-center rounded-md mx-auto">
          <label htmlFor="filter" className="text-lg font-medium mb-2">
            Filter:
          </label>
          <select
            id="filter"
            className="border p-2 rounded bg-gray-900 mt-2 w-full"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="cash">Cash</option>
            <option value="pending">Pending</option>
          </select>
          <div className="mt-4 flex-grow"></div>
          <div className="flex justify-between mt-2 w-full">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleApply}>
              Apply
            </button>
            <button className="text-gray-500 px-3 py-1 rounded" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarModal = ({ isOpen, onClose, onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleApply = () => {
    onSelectDate(selectedDate);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-900 text-white p-4 w-full max-w-md flex flex-col justify-center items-center rounded-md mx-auto">
          <label htmlFor="calendar" className="text-lg font-medium mb-2">
            Select a date:
          </label>
          <DatePicker
            id="calendar"
            selected={selectedDate}
            onChange={handleDateSelect}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
            className="border p-2 rounded bg-gray-900 mt-2 w-full text-white"
          />
          <div className="mt-4 flex justify-between w-full">
            <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleApply}>
              Apply
            </button>
            <button className="text-gray-500 px-3 py-1 rounded" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



const SportEventCard = () => {
  return (
    <article className="flex flex-col grow py-5 px-5 pr-4 pl-4 mx-auto 
    w-full rounded-2xl border border-solid bg-slate-800 border-gray-700 
    mt-6 md:max-w-full">
  <header className="flex gap-2.5 justify-between">
    <img loading="lazy" src="/betlogo.png" className="aspect-[0.92] w-[45px]" alt="Bet 365 Logo" />
    <div className="flex gap-5 self-start">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col flex-1">
          <h2 className="text-base font-bold leading-6 text-white">Bet 365</h2>
          <div className="flex gap-2 justify-between text-xs font-medium leading-6 text-gray-400 whitespace-nowrap">
            <img loading="lazy" src="/pendente.svg" className="my-auto w-4 aspect-square" alt="Calendar icon" />
            <time className="grow">24 Jan 2023 - 18:30</time>
          </div>
        </div>
        <div className="justify-center self-start px-5 text-xs font-medium leading-6 whitespace-nowrap bg-violet-300 aspect-[3.05] rounded-[58px] text-slate-900">Cash</div>
      </div>
      <button>
        <img loading="lazy" src="/3dot.svg" className="self-start w-6 aspect-square" alt="Cash icon" />
      </button>
    </div>
  </header>
  <div className="flex gap-5 justify-between mt-5 text-base font-bold leading-6 text-gray-400">
    <div className="grow whitespace-nowrap">
      <span className="font-medium text-neutral-200">Bankroll:</span>{" "}
      <span className="font-medium text-gray-400">Trade</span>
    </div>
    <div>
      <span className="font-medium text-neutral-200">ODD:</span>{" "}
      <span className="font-medium text-gray-400">1.60</span>
    </div>
    <div className="grow text-green-600 whitespace-nowrap">
      <span className="font-medium text-neutral-200">Profit:</span>{" "}
      <span className="font-medium text-green-600">+$30</span>
    </div>
  </div>
  <div className="flex gap-5 justify-between pr-9 mt-2 leading-6 max-md:pr-5">
    <BetDetails date="24 Jan 2023 - 18:30" type="Entrada"/>
    <div className="justify-center self-start px-2 text-xs font-medium
     text-lime-900 bg-orange-200 aspect-[3.2] rounded-[58px]">Pendente</div>
  </div>
</article>

  );
}


function BetDashboard() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [isCalendarModalOpen, setCalendarModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFilterButtonClick = () => {
    setFilterModalOpen(true);
  };

  const handleCalendarButtonClick = () => {
    setCalendarModalOpen(true);
  };

  const handleCalendarChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilterModalClose = () => {
    setFilterModalOpen(false);
  };

  const handleCalendarModalClose = () => {
    setCalendarModalOpen(false);
  };

  const handleFilterApply = (filter) => {
    setSelectedFilter(filter);
    console.log("Filter applied:", filter);
    handleFilterModalClose(); // Close the filter modal after applying the filter
  };

  const handleCalendarApply = (date) => {
    setSelectedDate(date);
    console.log("Date selected:", date);
    handleCalendarModalClose(); // Close the calendar modal after applying the date
  };

  
  const bets = [
    {
      iconUrl: "/betlogo.png",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Cash",
      entry: 50,
      exit: null,
      profit: 30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },

    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },

    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },
    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },

    {
      iconUrl: "/pendente.svg",
      date: "24 Jan 2023 - 18:30",
      betName: "Bet 365",
      status: "Pendente",
      entry: 50,
      exit: null,
      profit: -30,
      odd: 1.60
    },

    
  ];
  
  return (
    <main className="px-5 mt-12 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex justify-between items-center bg-gray-700 p-4">
      <div className="flex gap-4 items-center text-white w-full">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={handleFilterButtonClick}
        >
          <Filter className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={handleCalendarButtonClick}
          >
            <Calendar className="w-6 h-6" />
          </button>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => handleFilterApply(selectedFilter)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>

    {/* Render FilterModal component */}
    {isFilterModalOpen && (
      <FilterModal
        onClose={handleFilterModalClose}
        onApply={handleFilterApply}
        isOpen={isFilterModalOpen}
      />
    )}

    {/* Render CalendarModal component */}
    {isCalendarModalOpen && (
      <CalendarModal
        onClose={handleCalendarModalClose}
        onApply={handleCalendarApply}
        isOpen={isCalendarModalOpen}
      />
    )}

<div className="flex gap-5 max-md:flex-col" style={{ maxHeight: "500px", overflowY: "auto", scrollbarWidth: "thin", msOverflowStyle: "none" }}>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-3 w-full ">
    {/* Mapping data and rendering cards */}
    {bets.map((bet, index) => (
      <SportEventCard key={index} {...bet} />
    ))}
  </div>
  
</div>
  </main>
  );
}

export default BetDashboard;