import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Student from "../../components/Student/Student";

const StudentsCSR = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3001/students/");
      setStudents(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Students list CSR</title>
      </Head>
      <h2>Students list CSR</h2>
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

export default StudentsCSR;
