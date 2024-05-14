import JobCard from "../JobCard";

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="flex flex-col gap-4 w-full sm:w-4/5">
      {jobs.map((job) => (
        <JobCard data={job} key={job.id} />
      ))}
    </div>
  );
}
