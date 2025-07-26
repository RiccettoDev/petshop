import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <div className="flex gap-4 mt-4">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
