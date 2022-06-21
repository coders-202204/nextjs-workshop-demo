import Link from "next/link";

const Student = ({ student: { id, name } }) => {
  return (
    <div className="student">
      <h3>
        <Link href={`/student/${id}`}>
          <a>{name}</a>
        </Link>
      </h3>
    </div>
  );
};

export default Student;
