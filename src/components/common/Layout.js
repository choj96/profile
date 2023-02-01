import React, { useEffect, useRef } from "react";

const Layout = (props) => {
  // useRef 는 변수입니다. 즉, state가 아닙니다.
  // 아래 구문은 real Dom 을 참조함.
  // 하지만 아직 real Dom 이 만들어 지지 않았으므로
  // 참조가 어렵다.
  // useRef(document.querySelector("section"));
  // 순서 1번
  const frame = useRef(null);
  useEffect(() => {
    // frame useRef 를 활용해서 section 태그를 참조해서 css 작업
    frame.current.classList.remove("on");
    frame.current.classList.add("on");

    return () => {
      // 아래 구문은 에러가 발생합니다.
      // unmount 가 되면 참조 요소가 null 이된다.
      // frame.current.classList.remove("");
    };
  }, []);
  return (
    // 순서 2. 상위에 만들어둔 useRef 변수 frame 을 ref 속성으로 참조
    <section className={`content ${props.title}`} ref={frame}>
      <figure></figure>
      <div className="inner">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </section>
  );
};

export default Layout;
