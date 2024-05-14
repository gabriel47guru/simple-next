import JobList from "@/components/jobs/JobList";

export default async function Page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`).then(
    (res) => res.json()
  );
  return (
    <div className="w-full flex justify-center">
      <JobList jobs={data.data} />
    </div>
  );
}
