import s from'./App.module.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector( state => state.cash)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
    return (
        <div className={s.app}>
          <div className={s.cash}>{cash}</div>
            <div className={s.buttonsBox}>
                <button className={s.addButton} onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button className={s.getButton} onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            </div>
        </div>
    );
}

export default App;
