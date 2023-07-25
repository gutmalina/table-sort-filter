import styles from "./table-element.module.css";
import Table from "react-bootstrap/Table";
import { TABLE_HEADING, TABLE_HEARD_COLUMNS } from "../../utils/constant";
import { useSelector } from "react-redux";
import PaginationElement from "../pagination-element/pagination-element";
import { useEffect, useState } from "react";
import IconSort from "../../images/IconSort";

const TableElement = ({ wordSearch }) => {
  const users = useSelector((store) => store.users.users);
  const [numberPostsPerPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const lastIndexPage = activePage * numberPostsPerPage;
  const firstIndexPage = lastIndexPage - numberPostsPerPage;
  const [renderUsers, setRenderUsers] = useState();

  const handleSort = (data) => {
    let key = "";
    if (data === "ID") {
      key = "id";
    } else if (data === "Заголовок") {
      key = "title";
    } else {
      key = "body";
    }
    const arrNew = [...users].sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });

    setRenderUsers(arrNew);
  };

  const renderArr = () => {
    return (
      renderUsers?.length && renderUsers.slice(firstIndexPage, lastIndexPage)
    );
  };

  useEffect(() => {
    wordSearch &&
      setRenderUsers(
        users.filter(
          (item) =>
            item.title.includes(wordSearch) ||
            item.body.includes(wordSearch) ||
            (item.id + "").includes(wordSearch)
        )
      );
  }, [wordSearch, users]);

  useEffect(() => {
    users?.length && setRenderUsers(users);
  }, [users, firstIndexPage, lastIndexPage]);

  return (
    <>
      <Table responsive bsPrefix={styles.wrapper}>
        <thead className={styles.header}>
          <tr className={styles.row}>
            <th onClick={() => handleSort(TABLE_HEADING)}>
              <div
                className={`${styles.header_cell_container} ${styles.header_cell_container_id}`}
              >
                <p className={styles.header_cell_title}>{TABLE_HEADING}</p>
                <IconSort />
              </div>
            </th>
            {TABLE_HEARD_COLUMNS.map((item, index) => (
              <th
                key={index}
                className={styles.header_cell}
                onClick={() => handleSort(item)}
              >
                <div className={styles.header_cell_container}>
                  <p className={styles.header_cell_title}>{item}</p>
                  <IconSort />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderArr()
            ? renderArr().map((item, index) => (
                <tr key={item.id} className={styles.row}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      <PaginationElement
        setActivePage={setActivePage}
        activePage={activePage}
        renderUsers={renderUsers}
      />
    </>
  );
};

export default TableElement;
