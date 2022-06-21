import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Student from "../../components/Student/Student";

const StudentsSSG = ({ studentsAPI }) => {
  const [students, setStudents] = useState(studentsAPI);

  return (
    <>
      <Head>
        <title>Students list SSG</title>
      </Head>
      <h2>Students list SSG</h2>
      <ul className="students">
        {students.map((student) => (
          <li key={student.id}>
            <Student student={student} />
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3001/students/");

  return {
    props: {
      studentsAPI: data,
    },
    revalidate: 30,
  };
};

export default StudentsSSG;
