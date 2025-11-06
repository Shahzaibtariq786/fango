import Plus from "/src/assets/plus.svg?react";
import Minus from "/src/assets/minus.svg?react";

const Accordion = ({ title, description, isOpen, onToggle }) => {
  return (
    <div className="bg-[#111] rounded-xl p-4 pt-5 w-full">
      <button
        onClick={onToggle}
        className={`flex w-full justify-between items-center cursor-pointer ${isOpen ? 'text-light-green' : 'text-white'}`}
      >
        <span className="text-2xl font-bold">{title}</span>
        <span className="transition-all rotate-180 duration-500 ease-in-out">
          {isOpen ? (
            <Minus className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
