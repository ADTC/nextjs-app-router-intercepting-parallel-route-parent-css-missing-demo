export default function Layout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <p>This is the LAYOUT! Auth:</p>
      <div>{auth}</div>
      <p>Layout Children:</p>
      <div>{children}</div>
    </>
  );
}
