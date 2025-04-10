import { AntiVirusHostResponseInfo } from './AntiVirusHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiVirusHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntiVirusHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusHostResponseInfo>): ListAntiVirusHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusHostResponseInfo> | undefined {
        return this['data_list'];
    }
}