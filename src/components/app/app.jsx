import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersFetch } from "../../store/reduсers";
import { Routes, Route } from "react-router-dom";
import Main from "../main/main";
import { PATH_HOME, PATH_TABLE } from "../../utils/constant";
import { Navigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <>
      <Routes>        
        <Route path={PATH_HOME} element={<Navigate to={PATH_TABLE} replace />} />
        <Route path={PATH_TABLE} element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
