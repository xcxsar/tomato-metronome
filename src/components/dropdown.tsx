import { useState } from "react";

export type DropdownItem = {
  name: string;
  action: string | (() => void);
};

interface DropdownProps {
  items: DropdownItem[];
  label?: string;
}

export default function Dropdown({ items, label = "Menu" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="px-4 py-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {label + " ▾"}
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-[1000] mt-1.5 min-w-[160px] list-none rounded border border-gray-300 bg-white py-2.5 shadow-md">
          {items.map((item, index) => (
            <li key={index}>
              {typeof item.action === "string" ? (
                <a
                  href={item.action}
                  className="block px-4 py-2 text-gray-700 no-underline hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  onClick={() => {
                    (item.action as () => void)();
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
