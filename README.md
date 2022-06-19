<h1>React 과제</h1>
<h3>SPA란 무엇일까요?</h3>
SPA란 Single Page Application의 약자
단일 페이지 어플리케이션(SPA)는 현재 웹개발의 트랜드이다.
기존 웹 서비스는 요청시마다 서버로부터 리소스들과 데이터를 해석하고 화면에 렌더링하는 방식이다. SPA형태는 브라우저에 최초에 한번 페이지 전체를 로드하고, 이후부터는 특정 부분만 Ajax를 통해 데이터를 바인딩하는 방식이다.
<image src= "https://linked2ev.github.io/assets/img/devlog/201808/2018-08-01-SPA-step1.png">

  <h3> 왜 리액트를 사용하나요 </h3>
  <h4>React 란?</h4>
  페이스북에서 개발하고 관리하는 사용자 인터페이스(UI)를 만들기 위한 Javascript 라이브러리다.
  리액트는 가상 돔(virtual dom)으로 UI를 빠르게 업데이트 해주고, 메모리에 가상돔을 올려놓고 이전과 이후를 비교하여 변경될 UI의 최소 집합을 계산해준다.
  
  <h4>리액트의 특징</h4>
   <span>1. 컴포넌트 기반의 화면 구성</span>
     리액트는 화면의 한 부분을 컴포넌트 라는 단위로 나누어서 관리할 수 있다. 대규모 웹 애플리케이션에서 컴포넌트의 역할과 기능에 따라 따로 관리하기 용이하며, 반복되는 부분을 공통적인 부분으로 분리하여 재사용성을 높여준다. 또 컴포넌트의 화면을 구성한다면 블록 쌓기처럼 컴포넌트를 쌓아서 빠르고 효율적으로 화면을 구성할 수 있다.
 </br></br><span>2. 가상DOM으로 인한 빠른 속도</span>
  리액트는 가상 DOM을 이용해서 실제 DOM을 조작하는 횟수를 줄여서 성능을 빠르게 개선하였다. 리엑트에서 가상 DOM을 이용하는 방식은 다음과 같다.
  데이터가 변경되면 리액트는 가상 DOM을 다시 변경한다. 그리고 이전의 가상 DOM과 비교해서 변경된 부분을 체크하고 변경된 부분만 실제 DOM에 적용한다. 이러한 리액트의 렌더링 방식은 DOM 전체를 매번 리랜더링했던 이전 방식의 비해 빠르게 애플리케이션의 규모가 클수록, 데이터의 변경이 많을수록 더 큰 힘을 발휘한다.
  
  <h3> 컴포넌트란 무엇인가요? </h3>
  <image src= "https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/01/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.png?resize=768%2C506&ssl=1">
  컴포넌트란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다. 그림에서 확인 할 수 있듯이 컴포넌트 기반 프로그래밍을 하면 마치 레고처럼 이미 만들어진 컴포넌트들을 조합하여 화면을 구성할 수 있다.
  
  <h3> CSR VS SSR</h3>
  CSR(Client Side Rendering)의 약자 </br>
  말 그대로 렌더링이 클라이언트 쪽에서 일어난다. 즉, 서버는 요청을 받으면 클라이언트에 HTML과 JS를 보내준다. 클라이언트는 그것을 받아 렌더링을 시작한다. </br>
  <image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmvAPF%2FbtrcM1fGQEJ%2FoqGeGnUFg9wXZOkClMC39k%2Fimg.png">
  SSR(Server Side Rendering)의 약자 </br>
  말 그대로 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식이다.
  <image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6J4Fs%2FbtrcNnv3HWf%2F3f3KnWPKUBtlU7HshmcuOK%2Fimg.png">
  
  <h1>Redux, Recoil, R-Q, SWR의 장단점 </h1>
    <h3>Redux의 장단점 </h3>
     <h4> Redux의 장점 </h4>
      단 방향으로 데이터가 흐른다. 즉 버그를 예측하기 쉽다. 내가 어떤 액션을 실행하였고 어떻게 데이터가 흐르는지 예측이 가능하여 디버깅이 매우 용이하다. 그리고 기록이 남아서 이전 상태로도 되돌아 갈 수도 있다. 또 데이터의 중앙 집권화이다.
  <h4> Redux의 단점 </h4>
  우선 코드작성이 '초기에는 복잡'하다. 스테이트 업데이트에 맞는 액션값들과 디스패치 함수들 그리고 리듀서들.. 등등 초기에 미리미리 전부 만들어 줘야하는 복잡성이 있다.
  
  <h3> Recoil의 장단점 </h3>
  <h4> Recoil의 장점 </h4>
  1. 비동기문제를 깔끔하게 처리할 수 있다. </br>
  <li>동기상태를 다루듯이 처리하고, 귀찮은 비동기상태 처리는 Suspense에 위임한다. </li>
  <li>코드의 복잡도를 줄일 수 있다. </li>
  2. 단순하다. </br>
  <li> 리덕스의 action, dispatch, reducer, store, 비동기를 위한 thuck, saga.. 복잡하다</li>
  <li> 리코일은 atom, selector 두개가 사실상 끝 </li>
  3. 선언적 프로그래밍.</br>
  <h4> Recoil의 단점 </h4>
  1.안정성에 대한 걱정 </br>
  <li>레포지토리가 facebook/Recoil이 아니고 facebookexperimental/Recoil이다. </li>
  2. 실험적인 API들 </br>
  <li> recoil의 api중에는 아직도 UNSAFE surfix가 붙은것이 많다.</li>
  3. devtools의 부재 </br>
  4. 관련 오픈소스가 생태계가 redux에 비해서 부족하다 </br>

<h3> R-Q의 장단점 </h3>
<h4> R-Q의 장점 </h4>
1. 캐싱</br>
2. get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다.</br>
3. 데이터가 오래 되었다고 판단되면 다시 get</br>
4. 동일 데이터 여러번 요청하면 한번만 요청한다.</br>
5. 무한 스크롤</br>
<h4> R-Q의 단점 </4>
이 라이브러리는 나온지 그리 오래되지 않았고, 아무래도 그동안 리액트 시장을 redux-saga가 지배하고 있었다 보니 아직은 그들에 비해 커뮤니티 규모가 그리 크지 않다.

<h3> SWR의 장단점 </h3>
<h4> SWR의 장점  </h4>
1. 서버 데이터를 앱 데이터처럼 사용 </br>
SWR도 캐싱을 통해 데이터를 전역 상태로 관리하다고 볼 수 있다. 하지만 Redux와 다른 점은 서버 데이터를 앱 데이터처럼 사용할 수 있다는 점이다( Redux의 상태 추적은 SWR 단독으로는 불가) </br>

2. 데이터 갱신을 위한 re-fetching을 간단히 구현할 수 있다.</br>
3. fetch data가 캐시 후 앱 전역으로 공유되기 때문에 불필요한 request를 줄일 수 있다.</br>

<h1> 선택한 상태관리 툴과 이유 </h1>
<h3> recoil과 R-Q를 선택하였다 </h3>
  Redux나 MobX같은 대체제가 있지만 Recoil을 선태한 가장 큰 이유는 러닝커브가 낮았기 때문입니다. 제한된 시간안에 개발을 마쳐야 하므로 빠르게 적응할 수 있어야 했습니다. </br>
  R-Q를 선택한 이유는 현재 프론트엔드 개발자들의 높은 선호도뿐만 아니라 지원하는 기능들의 수준도 탁월해졌다고 했습니다.
  <img src="https://tech.madup.com/uploads/react-query-vs-swr/graph.png">
  
