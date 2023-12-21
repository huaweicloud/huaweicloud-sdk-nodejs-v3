import { ProcessesHostResponseInfo } from './ProcessesHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProcessesHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ProcessesHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListProcessesHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ProcessesHostResponseInfo>): ListProcessesHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProcessesHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProcessesHostResponseInfo> | undefined {
        return this['data_list'];
    }
}