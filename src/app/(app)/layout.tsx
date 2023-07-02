import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Playbook Nouhau",
  description: "Playbook Nouhau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id='wrapper'>
      <Sidebar />
      <div>{children}</div>
    </main>
  );
}
