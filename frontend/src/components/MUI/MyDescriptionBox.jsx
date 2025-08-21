import React, { useRef } from "react";

const DescriptionBox = ({
  value,
  setValue,
  placeholder = "Write a description...",
  required = false,
}) => {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required} // ✅ this makes it required
      className="w-full text-[18px] p-[12px_18px] rounded-xl border border-white 
                 focus:outline-none focus:border-[#4294FF] focus:ring-1 focus:ring-[#4294FF]
                 resize-none transition-colors duration-200 bg-transparent text-white 
                 placeholder-[#4294FF] focus:placeholder-[#788292] overflow-hidden"
      rows={3}
    />
  );
};

export default DescriptionBox;
