import { ProcessResponseInfo } from './ProcessResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProcessesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ProcessResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListProcessesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ProcessResponseInfo>): ListProcessesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProcessResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProcessResponseInfo> | undefined {
        return this['data_list'];
    }
}