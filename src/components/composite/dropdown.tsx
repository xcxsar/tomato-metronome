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
    <div className="relative inline-block selection:bg-selection-bg">
      <button
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="px-4 py-2 bg-component-bg text-app-text border border-border rounded cursor-pointer hover:bg-component-bg-hovered focus:outline-none focus:ring-2 focus:ring-focus shado"
      >
        {label + " ▾"}
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-[1000] mt-1.5 min-w-[160px] list-none rounded border border-border bg-component-bg py-2.5 shadow-md">
          {items.map((item, index) => (
            <li key={index}>
              {typeof item.action === "string" ? (
                <a
                  href={item.action}
                  className="block px-4 py-2 text-app-text no-underline hover:bg-component-bg-hovered rounded-md"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  onClick={() => {
                    (item.action as () => void)();
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-app-text hover:bg-component-bg-hovered focus:outline-none focus:ring-2 focus:ring-focus roduned-md"
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
