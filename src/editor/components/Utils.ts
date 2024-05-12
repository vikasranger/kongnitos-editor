import {v4 as uuId} from "uuid";
import {IParagraph} from "../Types.ts";

export function getLocalStorageData(key: string): IParagraph[]
{
  const data = window.localStorage.getItem(key);
  const initialData = [{
    id: uuId(),
    content: ""
  }];
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


