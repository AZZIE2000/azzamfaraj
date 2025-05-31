import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";
import Link from "next/link";

const jobsData = [
  {
    role: "Full Stack Engineer",
    company: "InfoToIntell",
    date: "2023 - Present",
    active: true,
    url: "https://www.infotointell.com/",
    positions: [
      {
        title: "senior web developer",
        date: "2025 - Present",
        description:
          "Leading a team of developers responsible for building AI-powered solutions.",
      },
      {
        title: "web developer",
        date: "2023 - 2025",
        description:
          "Developed and maintained web applications using NEXT.js, Node.js & MSSQL.",
      },
    ],
  },
  {
    role: "Full Stack Trainee",
    company: "Orange Coding Academy",
    date: "2022 - 2023",
    active: false,
    url: "",
    positions: [],
  },
  {
    role: "VFX Artist",
    company: "MBC1",
    date: "2021",
    active: false,
    url: "https://www.youtube.com/watch?v=8isYGyB_dnA",
    positions: [],
  },
];

const JobItem = ({
  job,
}: {
  job: {
    role: string;
    company: string;
    date: string;
    active: boolean;
    url: string;
    positions: {
      title: string;
      date: string;
      description: string;
    }[];
  };
}) => {
  const { role, company, date } = job;

  return (
    <div>
      <div className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
        <div className="flex flex-col gap-1">
          <h5
            className={classNames(
              "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
              { "opacity-35": !job.active, "opacity-65": job.active }
            )}
          >
            {date}
          </h5>
          <h1
            className={classNames(
              "text-2xl md:text-3xl font-medium dark:text-white text-black text-left w-fit",
              {
                "line-through opacity-55": !job.active,
                "opacity-100": job.active,
              }
            )}
          >
            {role}
          </h1>
        </div>
        <div className="flex flex-col md:items-end md:text-right">
          <h3
            className={classNames(
              "text-sm  font-medium dark:text-white text-black",
              { "opacity-65": !job.active, "opacity-80": job.active }
            )}
          >
            {company}
          </h3>
          <h5
            className={classNames(
              "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
              { "opacity-35": !job.active, "opacity-65": job.active }
            )}
          >
            {date}
          </h5>
        </div>
      </div>
      <div className="flex flex-col  gap-0 divide-y divide-gray-400 ">
        {job.positions.map((pos, index) => (
          <div key={index} className={classNames("flex flex-col gap-1 py-2")}>
            <h4 className="text-sm flex justify-between  font-semibold text-white">
              {pos.title}{" "}
              <span className="text-xs font-medium opacity-50">{pos.date}</span>
            </h4>
            <p className="text-xs font-medium text-white indent-3 ">
              {pos.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const JobsCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-60 uppercase">
            3 Years of
          </h4>
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Experience
          </h1>
        </div>
        <div className="flex flex-col relative z-10 justify-around h-full">
          {jobsData.map((job, index) =>
            job.url ? (
              <Link
                key={index}
                href={job.url}
                target="_blank"
                className="cursor-alias"
                rel="noopener noreferrer"
              >
                <JobItem key={index} job={job} />
              </Link>
            ) : (
              <JobItem key={index} job={job} />
            )
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobsCard;
