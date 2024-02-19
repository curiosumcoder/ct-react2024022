/* eslint-disable @typescript-eslint/no-explicit-any */
function SimpleList({ items }: { items: [] }) {
  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item: any, i) => (
          <>
          <p key={i}>
            {Object.entries(item).reduce((a, c: any) => (a += ` ${c[1]}`), "")}
          </p>
          </>
        ))}
    </>
  );
}

export default SimpleList;
