import axios from "axios";
import { useRouter } from "next/router";

const StudentDetail = ({ student }) => {
  const router = useRouter();

  return (
    <>
      <h2>Student detail</h2>
      {router.isFallback && <p>Loading...</p>}
      {student && (
        <p>
          {student.name} (AKA {student.alias})
        </p>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await axios.get("http://localhost:3001/students/");

  return {
    paths: data.map((student) => ({
      params: {
        id: `${student.id}`,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://localhost:3001/students/${params.id}`
  );

  return {
    props: {
      student: data,
    },
  };
};

export default StudentDetail;
