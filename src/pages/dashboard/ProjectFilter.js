
const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

const ProjectFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter By: </p>
        {filterList.map((fl) => (
          <button
            key={fl}
            onClick={() => handleClick(fl)}
            className={currentFilter === fl ? "active" : ""}
          >
            {fl}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
