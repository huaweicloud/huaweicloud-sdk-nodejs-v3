import { AntiVirusTaskResponseInfo } from './AntiVirusTaskResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiVirusTaskResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusTaskResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntiVirusTaskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusTaskResponseInfo>): ListAntiVirusTaskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusTaskResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusTaskResponseInfo> | undefined {
        return this['data_list'];
    }
}