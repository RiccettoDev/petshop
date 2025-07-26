import Link from "next/link";

export default function RotateTest() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Rotate Test</h1>
      <div className="flex gap-4 mt-4">
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-4 mt-4">
        <Link href="/not-found">not-found</Link>
      </div>
    </div>
  );
}
