import { DataWareHouseDTO } from './DataWareHouseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityDlfDataWareHousesResponse extends SdkResponse {
    private 'dw_lists'?: Array<DataWareHouseDTO>;
    public constructor() { 
        super();
    }
    public withDwLists(dwLists: Array<DataWareHouseDTO>): ListSecurityDlfDataWareHousesResponse {
        this['dw_lists'] = dwLists;
        return this;
    }
    public set dwLists(dwLists: Array<DataWareHouseDTO>  | undefined) {
        this['dw_lists'] = dwLists;
    }
    public get dwLists(): Array<DataWareHouseDTO> | undefined {
        return this['dw_lists'];
    }
}