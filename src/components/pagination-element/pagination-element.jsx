import styles from "./pagination-element.module.css";
import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";
import { COUNT_ROW_PAGE, BTN_BACK, BTN_NEXT } from "../../utils/constant";
import { useState } from "react";

const PaginationElement = ({ setActivePage, activePage, renderUsers }) => {
  const users = useSelector((store) => store.users.users);
  const countAllPages = renderUsers?.length / COUNT_ROW_PAGE;
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(false);

  let items = [];

  const selectPage = (pageNumber) => {
    setActivePage(pageNumber);
  };

  for (let number = 1; number <= Math.ceil(countAllPages); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => selectPage(number)}
        className={styles.item}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handlePrevPage = () => {
    setDisabledNext(false);
    if (activePage === 1) {
      setDisabledPrev(true);
    } else {
      selectPage(activePage - 1);
    }
  };

  const handleNextPage = () => {
    setDisabledPrev(false);
    if (activePage < countAllPages) {
      selectPage(activePage + 1);
    } else {
      setDisabledNext(true);
    }
  };

  return (
    <>
      <Pagination size="sm" bsPrefix={styles.wrapper}>
        <Pagination.Prev
          onClick={() => handlePrevPage()}
          disabled={disabledPrev}
        >
          {BTN_BACK}
        </Pagination.Prev>
        <div className={styles.page_container}>{items}</div>
        <Pagination.Next
          onClick={() => handleNextPage()}
          disabled={disabledNext}
        >
          {BTN_NEXT}
        </Pagination.Next>
      </Pagination>
    </>
  );
};

export default PaginationElement;
