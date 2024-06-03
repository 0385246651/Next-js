import { httpClient } from "../httpClient";
import { IGetDataParams } from "../type";

export default class LayoutService {
  static getGlobal = (params: IGetDataParams) => {
    return httpClient().get("/global", { params });
  };

  static getNavLevels = (params: IGetDataParams) => {
    return httpClient().get("/menus", { params });
  };
}
