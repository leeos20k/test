import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [schedules, setSchedules] = useState([]);

  //앱 실행시 한번 실행
  useEffect(() => {
    loadSchedules();
  }, []);

  //async는 만약 함수 function 앞에 붙임
  const loadSchedules = async () => {
    const result = await axios.get('http://localhost:8080/schedules');
    setSchedules(result.data);
  };

  const deleteSchedule = async (id) => {
    if(window.confirm('정말로 삭제하시겠습니까?')){
      await axios.delete(`http://localhost:8080/schedule/${id}`);
      loadSchedules();
    }
  }


  return (
  <div className="container">
        <table className="table border text-center shadow my-4">
            <thead>
              
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr key={index}>
                  <th scope="row"></th>
                  <td><Link to={`/viewschedule/${schedule.id}`}>{schedule.plan}</Link></td>
                  <td>
                    <Link to={`/editschedule/${schedule.id}`} className="btn btn-primary">수정</Link>
                    <button onClick={()=>deleteSchedule(schedule.id)} className="btn btn-danger mx-2">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
  </div>
  );
}

export default Home