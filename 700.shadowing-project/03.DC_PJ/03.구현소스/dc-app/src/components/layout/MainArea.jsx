import { Outlet } from "react-router-dom";
// Outlet -> 컴포넌트가 바뀌는 영역

// 메인영역 컴포넌트
export default function MainArea(){
    return (
        <main className="cont">
            <Outlet/>
        </main>
    )
}