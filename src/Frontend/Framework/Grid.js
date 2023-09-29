import Table from "react-bootstrap/Table";
import Framework from "./Framework";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
const Grid = (props) => {
  const generateField = (rowData, field, type) => {
    debugger;
    switch (type) {
      case Date.name:
        return new Date(rowData[field]).toDateString();
        break;

      default:
        return rowData[field];
        break;
    }
  };
  if (!props.config?.data) return <>data not exist</>;
  var data = props.config.data;
  var grid = data.map((d) => {
    return (
      <tr key={d[props.config.id] || Framework.generate_uuidv4()}>
        {props.config.columns.map((prop) => {
          const datacolumn = (
            <td key={Framework.generate_uuidv4()}>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components">
                  {/* as={CustomToggle} */}
                  Custom toggle
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* as={CustomMenu} */}
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          );
          return (
            (
              <td key={Framework.generate_uuidv4()}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="rowSelected"
                />
              </td>
            ),
            (
              <td key={Framework.generate_uuidv4()}>
                {generateField(d, prop.field, prop.type)}
                {/* {d[prop.field]} */}
              </td>
            ),
            datacolumn
          );
        })}
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th></th>
          {props.config.columns.map((prop) => {
            return (
              <th key={Framework.generate_uuidv4()} className="col-md-2">
                {prop.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{grid}</tbody>
    </Table>
  );
};
export default Grid;
