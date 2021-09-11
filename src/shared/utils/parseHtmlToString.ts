import parse from "html-react-parser";

export function parseHtmlToString(html: string): string {
  return parse(html) as string;
}