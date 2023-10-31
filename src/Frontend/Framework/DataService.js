// import { loadingAction } from "../Store";
import { loadingAction } from "../Store/loadingManager";
import environment from "./../../environment/environment";
import Framework from "./Framework";
class DataService {
  constructor(dispatch, id) {
    this.dispatch = dispatch;
    this.id = id;
  }
  async Get(url, params) {
    // this.dispatch({ type: "isLoading", valueState: true, id: this.id });
    var test = loadingAction;
    this.dispatch(test.isLoading({ valueState: true, id: this.id }));
    // const response = await fetch(url, {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });
    // return response.json();
    let urlValue = `${environment.baseUrl}${url}`;
    if (params) {
      var keyVAlus = [];
      urlValue += "?";
      var paramsValue = Object.keys(params);
      paramsValue.forEach((keyParam, index) => {
        keyVAlus.push(`${keyParam}=${params[keyParam]}`);
      });
      urlValue += keyVAlus.join("&");
    }
    return this.GetMethodIndependent(urlValue);
  }
  GetMethodIndependent(urlValue) {
    return fetch(urlValue, {
      headers: {
        Accept: "application/json",
      },
    }).then((md) => {
      debugger;

      this.dispatch(
        loadingAction.isLoading({ valueState: false, id: this.id })
      );

      // this.dispatch({ type: "isLoading", valueState: false, id: this.id });
      if (!md.ok) {
        throw new Error("error");
      }
      // const myBlob = md.blob();
      // return myBlob;
      // await md.json();
      return md.json();
    });
  }

  async Get2(url) {
    this.dispatch({ type: "isLoading", valueState: true, id: this.id });
    // const response = await fetch(url, {
    //   headers: {
    //     Accept: "application/json",
    //   },
    // });

    // return response.json();

    return fetch(`${environment.baseUrl}${url}`, {
      headers: {
        Accept: "application/json",
      },
    }).then((md) => {
      // loadingAction.isLoading({  valueState: false, id: this.id })
      this.dispatch({ type: "isLoading", valueState: false, id: this.id });

      if (!md.ok) {
        throw new Error("error");
      }
      // const myBlob = md.blob();
      // return myBlob;

      // await md.json();
      return md.json();
    });
  }
  GetMethod(url, stateUpdate, prop) {
    const fetchdata = fetch(`${environment.baseUrl}${url}`, {})
      .then((md) => {
        if (!md.ok) {
          throw new Error("error");
        }

        return md.json();
      })
      .then((rd) => {
        let resultData = [];
        for (const property in rd) {
          let val1 = rd[property];
          let val2 = { id: property };

          resultData.push({ ...val1, val2 });
        }

        prop &&
          stateUpdate((pre) => {
            pre[prop] = resultData;
            return pre;
          });

        // this.manageIds[lodingId] = false;
        // this.loading(lodingId, this.manageIds.get(lodingId));

        // this.alert("Data Update Succesfully");
      })
      .catch((cd) => {
        // this.alert("Data Update Succesfully", AlertType.danger);
      });
    return fetchdata;
  }
  // Example POST method implementation:
  async post(url = "", data = {}) {
    try {
      const bodyData = JSON.stringify(data);
      // Default options are marked with *
      const response = await fetch(`${environment.baseUrl}${url}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        //mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Headers": "Authorization",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: bodyData, //JSON.stringify(data), // body data type must match "Content-Type" header
      });
      this.alert("has error", AlertType.danger);

      const result = await response.json(); // parses JSON response into native JavaScript objects
      this.alert("data addet seccessfully", AlertType.success);
      return result;
    } catch (er) {
      throw new Error(er);
    }
  }
}
export default DataService;
export const AlertType = {
  info: "alert-info",
  warning: "alert-warning",
  danger: "alert-danger",
  success: "alert-success",
};
