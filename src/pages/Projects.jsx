import Project from "../components/Project";

export default function Projects() {
  const items = [
    {
      name: "project 1",
    },
    {
      name: "project 2",
    },
    {
      name: "project 3",
    },
  ];
  return (
    <div>
      <h2>this is the projects page</h2>

      <div>
        {items.map((item) => (
          <Project item={item} />
        ))}
      </div>
    </div>
  );
}
