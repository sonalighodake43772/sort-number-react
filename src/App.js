import { useState, useCallback, useMemo } from "react";
import Demo from "./component/Demo/Demo";
import Button from "./component/UI/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [descending, setDesending] = useState([]);
  const [btnText, setBtnText] = useState("Descending order");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrder = () => {
    let text = btnText;

    if (text === "Descending order")
       {
         setBtnText("Ascending Order");
         const descendingSort = listItems.sort((a, b) => b - a);
         setDesending(descendingSort);
       }
    else
       {
         setBtnText("Descending order");
         const assendingSort = listItems.sort((a, b) => a - b);
         setDesending(assendingSort);
       }
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
   <div className="app">
      <Demo title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>change list Title</Button>
      <Button onClick={changeOrder}>{btnText}</Button>
    </div>
  );
}
export default App;
