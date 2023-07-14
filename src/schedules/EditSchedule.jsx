import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditSchedule = () => {
  let navigate = useNavigate(); //네비게이트 객체 생성

  //요청주소의 id값을 받음
  const {id} = useParams();

  const [schedule, setSchedule] = useState({
    plan: '',
    info: ''
  });

    //앱 실행시 한번 실행
    useEffect(() => {
      loadSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    //async는 만약 함수 function 앞에 붙임
    const loadSchedule = async () => {
      const result = await axios.get(`http://localhost:8080/schedules/${id}`);
      setSchedule(result.data);
    };

  const onInputChange = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    })
  }

  //구조 분해 할당
  const {plan, info} = schedule;

  //폼의 가입 버튼을 눌렀을때 이벤트
  const onSubmit = async(e) => {
    e.preventDefault(); //기본 전송 기능 중지
    //백엔드서버로 schedule 데이터 전송
    await axios.put(`http://localhost:8080/schedule/${id}`, schedule);
    //바로 홈페이지로 이동(리스트에 새유저가 보임)
    navigate("/");
  }


  return( 
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>

        <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="plan" className="form-label">
                    계획
                  </label>
                  <input
                    required
                    type="text"
                    id="plan"
                    value={plan}
                    onChange={onInputChange}
                    className="form-control"
                    placeholder="계획 입력"
                    name="plan"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="info" className="form-label">
                    상세
                  </label>
                  <input
                    required
                    type="text"
                    id="info"
                    value={info}
                    onChange={onInputChange}
                    className="form-control"
                    placeholder="상세 입력"
                    name="info"
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary px-3 mx-2">
                    수정
                  </button>
                  <Link to="/" className="btn btn-danger px-3 mx-2">
                    취소
                  </Link>
                </div>
        </form>
      </div>
    </div>
  </div>
  );
};


export default EditSchedule