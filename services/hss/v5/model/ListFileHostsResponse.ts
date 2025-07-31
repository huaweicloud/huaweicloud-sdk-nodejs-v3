import { FileHostResponseInfo } from './FileHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<FileHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListFileHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<FileHostResponseInfo>): ListFileHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<FileHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<FileHostResponseInfo> | undefined {
        return this['data_list'];
    }
}