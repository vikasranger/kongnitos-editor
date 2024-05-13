import {IParagraph} from "../Types.ts";

export function getLocalStorageData(key: string): IParagraph[]
{
  const data = window.localStorage.getItem(key);
  if(data)
  {
    try
    {
      return JSON.parse(data);
    }
    catch(e)
    {
      return initialData;
    }
  }
  else
  {
    return initialData;
  }
}

export function saveToLocalStorage(key: string, data: any)
{
  window.localStorage.setItem(key, JSON.stringify(data));
}

const initialData = [
  {
    "id": "5a32deaf-8e93-4b3d-b1d9-9d1bb50010b8",
    "content": "<b><font color=\"#002aff\">Business</font></b> <b><font color=\"#990078\">Automation</font></b> in Your Own <b>Words</b> clock-fast-forward <b>Rapid</b> <b>automation</b> and <b><u>innovation</u></b> fueled by AI <b><font color=\"#0400ff\">message</font></b>-chat-square Build <font color=\"#544040\"><b>automation</b></font> and manage exceptions in English <u>piggy</u>-bank-01 <font color=\"#ff0000\"><b><u>Reduce</u></b></font> <font color=\"#ff0000\"><u>automation</u></font> costs <u>significantly</u> Book a <b><u>demo</u></b> now and explore the <u>power</u> of <b><font color=\"#9d2f2f\">Kognitos</font></b>:&nbsp;(medium.com)[&lt;http://medium.com/&gt;]&nbsp;",
    "text": "Business Automation in Your Own Words clock-fast-forward Rapid automation and innovation fueled by AI message-chat-square Build automation and manage exceptions in English piggy-bank-01 Reduce automation costs significantly Book a demo now and explore the power of Kognitos: (medium.com)[<http://medium.com/>] "
  },
  {
    "id": "f248ac6f-50db-4e95-bef0-952a1a7df79e",
    "content": "",
    "text": ""
  }
];

export const PARAGRAPH_KEY = "paragraph_key";
