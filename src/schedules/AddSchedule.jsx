import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddSchedule = () => {
  let navigate = useNavigate(); //네비게이트 객체 생성

  const [schedule, setSchedule] = useState({
    plan: '',
    info: ''
  })

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
    await axios.post('http://localhost:8080/schedule', schedule);
    //바로 홈페이지로 이동(리스트에 새유저가 보임)
    navigate("/");
  }


  return( 
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">계획 추가</h2>

        <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="plan" className="form-label">
                    계획명
                  </label>
                  <input
                    required
                    type="text"
                    id="plan"
                    value={plan}
                    onChange={onInputChange}
                    className="form-control"
                    // placeholder="계획명"
                    name="plan"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="info" className="form-label">
                    상세내용
                  </label>
                  <input
                    required
                    type="text"
                    id="info"
                    value={info}
                    onChange={onInputChange}
                    className="form-control"
                    // placeholder="상세내용"
                    name="info"
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary px-3 mx-2">
                    등록
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

export default AddSchedule;

