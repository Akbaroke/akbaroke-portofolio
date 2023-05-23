export default function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className="max-w-4xl m-auto px-5">{children}</div>;
}
