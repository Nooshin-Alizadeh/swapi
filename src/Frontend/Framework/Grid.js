import Table from "react-bootstrap/Table";
import Framework from "./Framework";
import Form from "react-bootstrap/Form";
import DataService from "../Framework/DataService";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import { loadingAction } from "../Store/loadingManager";
import { alertAction } from "../Store/alertManager";
import { type } from "./Alert";
const Grid = (props) => {
  const dispatch = useDispatch();
  // const _loadingAction = loadingAction;
  let dataService;
  const generateField = (rowData, field, type, templpate) => {
    switch (type) {
      case Date.name:
        return new Date(rowData[field]).toDateString();
      case "firstradio":
        return (
          <Form.Check type="radio" aria-label="radio 1" name="rowSelected" />
        );
      case "firstSelect":
        return (
          <Form.Check type="radio" aria-label="radio 1" name="rowSelected" />
        );
      case "firstaction":
        return <td key={Framework.generate_uuidv4()}>...</td>;
      default:
        if (templpate) {
          return templpate(rowData);
        }
        return rowData[field];
    }
  };
  const [pageData, setData] = useState({ gridData: [], pagination: [] });
  const [generate, setGenerate] = useState(true);
  const columnsValue = props.config.columns;
  const getGridData = (pageNum, loadingId) => {
    if (props.config?.url) {
      dataService
        .Get(props.config?.url, { page: pageNum })
        .then((result) => {
          var pages = setPagination(result.count);
          //paginationItem = result.count;
          setData({
            gridData: result.results,
            pagination: pages,
          });
        })
        .catch((er) => {
          //'Failed to fetch'
          dispatch(
            loadingAction.isLoading({ valueState: false, id: loadingId })
          );
          dispatch(
            alertAction.alertConfig({
              config: {
                time: 20,
                msg: er.message,
              },
            })
          );
          dispatch(
            alertAction.alertConfig({
              config: {
                time: 20,
                msg: "FAIL TO LOAD GRID.",
                type: type.warning,
              },
            })
          );
        });
    } else if (props.config.data) {
      setData((pre) => {
        return {
          ...pre,
          gridData: props.config.data.slice((pageNum - 1) * 10, pageNum * 10),
        };
      });
    }
  };
  const setPagination = (totalCount, pageNum) => {
    let pagination = [];
    const pagesCount = totalCount / 10;
    // const remain = totalCount % 10;
    for (let i = 0; i < pagesCount; i++) {
      const index = i + 1;
      pagination.push(
        <Pagination.Item
          key={index}
          active={index === pageNum}
          onClick={() => {
            getGridData(index);
          }}
        >
          {index}
        </Pagination.Item>
      );
      // const element = array[index];
    }
    return pagination;
  };
  if (generate) {
    setGenerate(false);
    if (!props.config?.data && !props.config?.url) return <>data not exist</>;
    if (props.config?.url) {
      const loadingId = Framework.generate_uuidv4();
      dataService = new DataService(dispatch, loadingId);
      getGridData(1, loadingId);
    } else if (props.config?.data) {
      setGenerate(false);
      var pages = setPagination(props.config?.data.length);
      //paginationItem = result.count;
      setData({
        gridData: props.config?.data,
        pagination: pages,
      });

      //setData(props.config.data);
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
                  onChange={(row) => {
                    prop.onClick(d, row);
                  }}
                />
              </td>
            );
          if (prop.type == "firstSelect")
            return (
              <td key={Framework.generate_uuidv4()}>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="rowSelected"
                  onChange={(row) => {
                    prop.onClick(d, row);
                  }}
                />
              </td>
            );
          if (prop.type == "firstaction")
            return <td key={Framework.generate_uuidv4()}>...</td>;
          const datacolumn = (
            <td key={Framework.generate_uuidv4()}>
              {generateField(d, prop.field, prop.type, prop.template)}
              {/* {d[prop.field]} */}
            </td>
          );

          return datacolumn;
        })}
      </tr>
    );
  });
  return (
    <div className="table-responsive table-responsive table-responsive-xxl">
      <Table striped bordered hover responsive="xl" size="sm">
        <thead>
          <tr>
            {props.config.columns.map((prop) => {
              return <th key={Framework.generate_uuidv4()}>{prop.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>{grid}</tbody>
      </Table>
      <div className="d-flex flex-row-reverse bd-highlight">
        <Pagination size="sm">{pageData.pagination}</Pagination>
      </div>
    </div>
  );
};
export default Grid;
