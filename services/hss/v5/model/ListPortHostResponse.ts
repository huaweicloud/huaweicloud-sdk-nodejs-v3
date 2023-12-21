import { PortHostResponseInfo } from './PortHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PortHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPortHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PortHostResponseInfo>): ListPortHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PortHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PortHostResponseInfo> | undefined {
        return this['data_list'];
    }
}