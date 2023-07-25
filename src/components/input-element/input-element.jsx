import styles from "./input-element.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import IconSearch from "../../images/IconSearch";

const InputElement = ({ setWordSearch }) => {
  const handleChange = (e) => {
    setWordSearch(e.target.value);
  };

  return (
    <>
      <InputGroup className={styles.wrapper}>
        <Form.Control
          id="search"
          onChange={handleChange}
          placeholder="Поиск"
          bsPrefix={styles.input}
        />
        <IconSearch />
      </InputGroup>
    </>
  );
};

export default InputElement;
