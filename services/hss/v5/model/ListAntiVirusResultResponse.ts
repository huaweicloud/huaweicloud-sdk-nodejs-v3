import { AntiVirusResultResponseInfo } from './AntiVirusResultResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiVirusResultResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusResultResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntiVirusResultResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusResultResponseInfo>): ListAntiVirusResultResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusResultResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusResultResponseInfo> | undefined {
        return this['data_list'];
    }
}