export interface IParagraph
{
  id: string,
  content: string,
  text: string
}

export interface ILink
{
  text: string,
  url: string
}

export interface IPopoverCss
{
  left: string,
  top: string,
  display?: "flex" | "none"
}

