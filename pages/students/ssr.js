import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Student from "../../components/Student/Student";

const StudentsSSR = ({ studentsAPI }) => {
  const [students, setStudents] = useState(studentsAPI);

  return (
    <>
      <Head>
        <title>Students list SSR</title>
      </Head>
      <h2>Students list SSR</h2>
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

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3001/students/");

  return {
    props: {
      studentsAPI: data,
    },
  };
};

export default StudentsSSR;
