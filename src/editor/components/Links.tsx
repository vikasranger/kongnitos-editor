import {ILink} from "../Types.ts";
import "../Styles.css";

export default function Links(props: {links: ILink[]})
{
  const {links} = props;
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className={index % 2 === 0 ? "link odd" : "link even"}
          >
            {link.text}
          </a>
          <br />
        </li>
      ))}
    </ul>
  );
};
