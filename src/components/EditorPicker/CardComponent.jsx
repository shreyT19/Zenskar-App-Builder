import React from "react";
import { useDrag } from "react-dnd";

const CardComponent = ({
  index,
  iconContent,
  headDescription,
  description,
  iconSvg,
  styles,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: isDragging ? "2px solid red" : "",
      }}
      className="px-4 flex gap-4 border border-[#A0B8C789] py-4 cursor-pointer hover:shadow-lg btn-theme justify-evenly transition-transform transform hover:scale-110 rounded-xl mb-4 "
    >
      <div className="min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#74caff89] rounded flex items-center justify-center font-bold">
        <div className={styles}>
          {iconContent}
          {iconSvg && <div dangerouslySetInnerHTML={{ __html: iconSvg }} />}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#1A1A1A] font-semibold text-justify">
          {headDescription}
        </p>
        <p className="text-[#707880] text-left">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
