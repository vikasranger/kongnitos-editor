import {useCallback} from "react";
import {useEffect, useRef, useState} from "react";
import {IPopoverCss} from "../Types.ts";
import "../Styles.css";

export default function Popover(props: {
  position?: IPopoverCss,
})
{
  const {position} = props;
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) =>
  {
    if(popoverRef.current && !popoverRef.current.contains(e.target as Node))
    {
      setIsVisible(false);
    }
  }, [popoverRef]);

  const handlePopoverOption = useCallback((commandId: string, color?: string) =>
  {
    if(commandId === "foreColor")
    {
      document.execCommand(commandId, false, color);
    }
    else
    {
      const currentValue = document.queryCommandState(commandId);
      document.execCommand(commandId, false, currentValue ? "false" : "true");
    }
  }, []);

  const handlePopoverMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) =>
  {
    e.preventDefault(); // Prevent the default mousedown behavior
    e.stopPropagation(); // Stop the event from propagating further
  }, []);

  useEffect(() =>
  {
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
    {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() =>
  {
    setIsVisible(true);
  }, [position]);

  return isVisible ? (
    <div className="popover" style={position} ref={popoverRef} onMouseDown={handlePopoverMouseDown}>
      <button
        className={"popover-item bold"}
        onClick={() => handlePopoverOption("bold")}
      >
        Bold
      </button>
      <button
        className={"popover-item underline"}
        onClick={() => handlePopoverOption("underline")}
      >
        Underline
      </button>
      <input
        className={"color-box"}
        type="color"
        onChange={(e) => handlePopoverOption("foreColor", e.target.value)}
      />
    </div>
  ) : null;
}
