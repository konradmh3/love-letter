export default function CreationComponent({
  children,
    header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <div className="creation-component">
      <div className="creation-component-header">{header}</div>
      <div className="creation-component-body">{children}</div>
    </div>
  );
}
