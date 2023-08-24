import { PortResponseInfo } from './PortResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PortResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPortsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PortResponseInfo>): ListPortsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PortResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PortResponseInfo> | undefined {
        return this['data_list'];
    }
}