import { RestoreTablesInfo } from './RestoreTablesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestoreTablesResponse extends SdkResponse {
    private 'data_list'?: Array<RestoreTablesInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<RestoreTablesInfo>): ShowRestoreTablesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<RestoreTablesInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<RestoreTablesInfo> | undefined {
        return this['data_list'];
    }
}