import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import studentApi from './api/studentApi';

function App() {
  let [studentList, setStudentList] = useState([])

  useEffect(() => {
    const fetchStudentList = async () => {
      try {
        const response = await studentApi.getAll();
        setStudentList(response)
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch student list: ', error);
      }
    }

    fetchStudentList();
  }, [])
  return (
    <div className="App">
      <div className='students'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fullname</th>
              <th>Class</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullName}</td>
                <td>{student.class}</td>
                <td>{student.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




export default App;
