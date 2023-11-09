import { useTranslation } from 'react-i18next';
import { MainTitle } from '../commons/TitleStyle';
import { InputText } from '../commons/inputStyle';
const LoginForm = ({ onSubmit, onChange, form, error }) => {
  const { t } = useTranslation();

  return (
    <>
      <MainTitle>{t('로그인')}</MainTitle>
      <form onSubmit={onSubmit}>
        <InputText
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        {error.email && <div>{error.email}</div>}

        <InputText
          type="password"
          name="password"
          placeholder={t('비밀번호')}
          onChange={onChange}
          value={form.password}
        />
        {error.password && <div>{error.password}</div>}

        <button type="submit">{t('로그인')}</button>
      </form>
    </>
  );
};

export default LoginForm;
// let num = 10; //랜더링 시에 초기화
//let refUserId = React.createRef(); // 클래스형 컴포넌트 +함수형 컴포넌트 둘다 사용가능
// let refUserId = useRef(); // 함수형 컴포넌트 에서만 사용가능
// let refTitle = useRef();

// let refCount = useRef(10); // 랜더링 상관없이 사용가능한 지역변수

// // ref : DOM을 선택하기위한 용도
// useEffect(() => {
//   // current 속성을 통해서 DOM에 접근

//   console.log(refUserId.current);
//   refUserId.current.focus();

//   refTitle.current.printInfo();
// }, []);

// const handleClick = () => {
//   console.log(refCount.current);
//   refCount.current++;
// };
// let refUserId;
// useEffect(() => {
//   // 랜더링 직후 , 갱신 직후 -> 랜더링 이후에 할 공통 작업
//   console.log(refUserId);
//   refUserId.focus();
// }, [refUserId]);

{
  /* <MainTitle>{t('로그인')}</MainTitle>
      <form>
        {/* <input
          type="text"
          ref={(ref) => (refUserId = ref)}
          name="userId"
          placeholder={t('아이디')}
        /> */
}
{
  /* <input type="text" name="userId" placeholder={t('아이디')} />
        <input type="password" name="userPw" placeholder={t('비밀번호')} />
        <button type="submit">{t('로그인')}</button>
        {/* <button type="button" onClick={handleClick}> */
}

{
  /* </button> */
}
{
  /* </form> */
}
