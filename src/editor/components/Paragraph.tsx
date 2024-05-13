import {useState} from "react";
import {KeyboardEvent} from "react";
import {FocusEvent} from "react";
import {DragEvent} from "react";
import {MouseEvent} from "react";

export default function Paragraph(props: {
  id: string,
  onDoubleClick: (e: MouseEvent<HTMLParagraphElement>) => void,
  onDragStart: (e: DragEvent<HTMLParagraphElement>) => void,
  onDragOver: (e: DragEvent<HTMLParagraphElement>) => void,
  onDrop: (e: DragEvent<HTMLParagraphElement>) => void,
  onBlur: (e: FocusEvent<HTMLParagraphElement>) => void,
  onKeyDown: (e: KeyboardEvent<HTMLParagraphElement>) => void,
  html: string,
  onClick: () => void
})
{
  const [showPlaceholder, setShowPlaceholder] = useState(props.html.trim().length === 0);
  const handleInput = (text: string | null) =>
  {
    console.log(text);
    if(!text || text.trim() === "")
    {
      setShowPlaceholder(true);
    }
    else
    {
      setShowPlaceholder(false);
    }
  };

  return (
    <div className={"paragraph-container"}>
      <p
        id={props.id.toString()}
        className="paragraph"
        draggable
        onDoubleClick={props.onDoubleClick}
        onDragStart={props.onDragStart}
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}
        contentEditable
        onBlur={props.onBlur}
        onInput={(e) => handleInput(e.currentTarget.textContent)}
        onKeyDown={props.onKeyDown}
        dangerouslySetInnerHTML={{__html: props.html}}
      />
      <button className={"delete"} onClick={props.onClick}>✖</button>
      {showPlaceholder && (
        <span className="placeholder">Enter your text here...</span>
      )}
    </div>
  );
}
