import { resetStyles } from "./reset";

export function StyleProvider(props: { children: React.ReactNode }) {
  resetStyles();
  return <>{props?.children}</>;
}
