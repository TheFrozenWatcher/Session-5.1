
import React from 'react';

// Tạo một function component ListCourse nhận props courses
const ListCourse = ({ courses }) => {
    return (
        <div className="course-list">
            <h2>Danh sách khóa học</h2>
            <ul>
                {/* Sử dụng map để render từng khóa học */}
                {courses.map(course => (
                    <li key={course.id}>
                        <div className="course">
                            <div className="course-thumbnail">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="course-info">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                                <span>Bắt đầu: {course.start}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCourse;
