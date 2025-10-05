import LeftSidebar from "@/components/leftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT SAIDBAR</p>
        {children}
        <p className="text-white-1">RIGHT SAIDBAR</p>
      </main>
    </div>
  );
}
