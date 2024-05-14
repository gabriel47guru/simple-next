import JobDetail from "@/components/jobs/JobDetail";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`
  ).then((res) => res.json());

  return (
    <div className="w-full flex justify-center bg-black">
      <JobDetail data={data} />
    </div>
  );
}
