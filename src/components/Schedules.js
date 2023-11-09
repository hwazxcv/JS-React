import { useState, useRef } from 'react';

const initialForm = {
  id: 0,
  date: '',
  content: '',
};

const Scheduled = () => {
  let id = useRef(4);
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      date: '2023/11/04',
      content: '스케줄1',
    },
    {
      id: 2,
      date: '2023/11/05',
      content: '스케줄2',
    },
    {
      id: 3,
      date: '2023/11/06',
      content: '스케줄3',
    },
  ]);

  const [form, setFrom] = useState(initialForm);
  //   const [date, setDate] = useState('');
  //   const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    form.id = id.current++;
    // schedules.push(form);
    // 배열 concat 메서드 -> 추가하고 새로운 객체 반환
    setSchedules(schedules.concat(form));

    setFrom({ ...initialForm });

    console.log(form);
  };

  const handChange = (e) => {
    //form[e.currentTarget.name] = e.currentTarget.value;
    setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value }); // 전개 연산자(깊은 복사 : 기존 객체의 값을 복사할떄 사용한다.새로운 객체(주소값이 다름))
  };
  return (
    <>
      <h1>스케줄 등록</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="date"
          placeholder="날짜"
          onChange={handChange}
          value={form.date}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={handChange}
          value={form.content}
        />
        <button type="submit">등록하기</button>
      </form>
      <hr />
      <ul>
        {schedules.map((s) => (
          <li key={s.id}>
            {s.date}/{s.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Scheduled;
