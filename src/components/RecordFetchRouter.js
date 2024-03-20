import { NavLink, Outlet } from "react-router-dom"; 

export const RecordFetchRouter = () => {

    return (
        <>
        <ul>
            <li><NavLink to="/">トップページ</NavLink></li>
            <li><NavLink to="/index">レコード一覧</NavLink></li>
            <li><NavLink to="/create">クイズを登録</NavLink></li>
            <li><NavLink to="/quiz">クイズに挑戦</NavLink></li>
        </ul>
        <hr />
        <Outlet />
        </>
    )
}