import { SecurityCheckHostResultResponseInfo } from './SecurityCheckHostResultResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityCheckHostResultResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityCheckHostResultResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSecurityCheckHostResultResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityCheckHostResultResponseInfo>): ListSecurityCheckHostResultResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityCheckHostResultResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityCheckHostResultResponseInfo> | undefined {
        return this['data_list'];
    }
}