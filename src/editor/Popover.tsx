import {IPopoverCss} from "./Types.ts";
import "./Styles.css"

export default function Popover(props: {
  hidePopover: () => void,
  position?: IPopoverCss,
})
{
  const {
    hidePopover,
    position
  } = props;

  const handlePopoverOption = (commandId: string, color?: string) =>
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
  };

  return (
    <div
      className="popover"
      style={position}
      onMouseLeave={hidePopover}
    >
      <button className={"popover-item bold"} onClick={() => handlePopoverOption("bold")}>Bold</button>
      <button className={"popover-item underline"} onClick={() => handlePopoverOption("underline")}>Underline</button>
      <input className={"color-box"} type="color" onChange={(e) => handlePopoverOption("foreColor", e.target.value)} />
    </div>
  );
}
