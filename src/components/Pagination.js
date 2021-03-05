import React, {useContext} from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode" : "";
  return (
    <div className={"pagination"+(theme)}>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}