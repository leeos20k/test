import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewSchedule = () => {


  const { id } = useParams();

  const [schedule, setSchedule] = useState({
    plan: '',
    info: ''
  });

  //페이지 시작시 스케줄데이터를 받아 schedule에 저장
  useEffect(() => {
    loadSchedule();
    // eslint-disable-next-line
  }, []);

  const loadSchedule = async () => {
    const result = await axios.get(`http://localhost:8080/schedules/${id}`);
    setSchedule(result.data);
  };

  const { plan, info } = schedule;




  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">계획 정보</h2>

          <div className="card">
            <div className="card-header">
              계획ID : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>계획 : {plan}</b>
                </li>
                <li className="list-group-item">
                  <b>상세 : {info}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={'/'}>
            돌아가기
          </Link>
        </div>
      </div>
    </div>

  );
}

export default ViewSchedule