import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>Dashboard</div>
      <Link href="/jobs">Go to Job Lists</Link>
    </div>
  );
}
