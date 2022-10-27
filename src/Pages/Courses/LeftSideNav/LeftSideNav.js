import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://learning-roan.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mt-4 shadow px-4 border rounded text-center py-2">
      <h3>Course</h3>
      {courses.map((course) => (
        <p key={course.id}>
          <Link className="fw-bold" to={`/courseDetails/${course.id}`}>
            {course.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
