import Table from "react-bootstrap/Table";
import Framework from "./Framework";
import Form from "react-bootstrap/Form";
import DataService from "../Framework/DataService";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
const Grid = (props) => {
  const dispatch = useDispatch();
  let dataService;
  const generateField = (rowData, field, type) => {
    switch (type) {
      case Date.name:
        return new Date(rowData[field]).toDateString();
        break;
      case "firstradio":
        return (
          <Form.Check type="radio" aria-label="radio 1" name="rowSelected" />
        );
        break;
      case "firstaction":
        return <td key={Framework.generate_uuidv4()}>...</td>;
        break;
      default:
        return rowData[field];
        break;
    }
  };
  const [pageData, setData] = useState({gridData:[] , pagination:[]});
  const [generate, setGenerate] = useState(true);
  const columnsValue = props.config.columns;
  console.info(generate);

  if (generate) {
    setGenerate(false);
    if (!props.config?.data && !props.config?.url) return <>data not exist</>;
    if (props.config?.url) {
      const loadingId = Framework.generate_uuidv4();
      dataService = new DataService(dispatch, loadingId);
      getGridData(1);
    } else if (props.config?.data) {
      setGenerate(false);

      setData(props.config.data);
    }
  }

  var grid = pageData.gridData.map((d) => {
    return (
      <tr key={d[props.config.id] || Framework.generate_uuidv4()}>
        {columnsValue.map((prop) => {
          if (prop.type == "firstradio")
            return (
              <td key={Framework.generate_uuidv4()}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="rowSelected"
                />
              </td>
            );
          if (prop.type == "firstaction")
            return <td key={Framework.generate_uuidv4()}>...</td>;
          const datacolumn = (
            <td key={Framework.generate_uuidv4()}>
              {generateField(d, prop.field, prop.type)}
              {/* {d[prop.field]} */}
            </td>
          );

          return datacolumn;
        })}
      </tr>
    );
  });
  return (
    <Fragment>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
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
      <div className="d-flex flex-row-reverse bd-highlight">
      <Pagination size="sm">{pageData.pagination}</Pagination>
      </div>
    </Fragment>
  );

  function getGridData(pageNum) {

    dataService
      .Get(props.config?.url, { page: pageNum })
      .then((result) => {
        var pages =setPagination(result.count);
        //paginationItem = result.count;
        setData({
          gridData:result.results,
          pagination:pages
        });
      })
      .catch((er) => {
        //dispatch({type:"isLoading",valueState:false,id:loadingId});
      });

    function setPagination(totalCount) {

      let pagination = [];
      const pagesCount = totalCount / 10;
      // const remain = totalCount % 10;
      for (let i = 0; i < pagesCount; i++) {
        const index = i + 1;
        pagination.push(
          <Pagination.Item
            key={index}
            active={index === pageNum}
            onClick={()=>{getGridData(index)}}
          >
            {index}
          </Pagination.Item>
        );
        // const element = array[index];
      }
      return pagination;
      // if (remain != 0) {
      //   paginationItem.push(
      //     <Pagination.Item
      //       key={pagesCount.length}
      //       active={pagesCount.length === pageNum}
      //     >
      //       {pagesCount.length}
      //     </Pagination.Item>
      //   );
      // }
    }
  }
};
export default Grid;
