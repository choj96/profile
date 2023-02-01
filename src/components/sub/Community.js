import React, { useEffect } from "react";
import Layout from "../common/Layout";

const Community = () => {
  // javascript 코드 자리
  // 컴포넌트가 마운트, 업데이트(state 변화), 언마운트 시
  // 하고 싶은 일을 작성하는 Hook useEffect
  // 기본형태
  // useEffect(() => {
  //   하고싶은 일
  //   클린업 함수 : 컴포넌트 제거시 실행
  //   return () => {}
  // }, [의존성배열: dependency Array]);
  useEffect(() => {
    console.log("mount : 컴포넌트 생성");
    // axios, html 요서 선택하는 작업
    return () => {
      console.log("unmount : 컴포넌트 제거");
    };
  }, []);

  // jsx 코드 자리
  // : 주의 사항 return ()  o
  // : 주의 사항 return {}  x
  return <Layout title={"Community"}>Community</Layout>;
};

export default Community;
