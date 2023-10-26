import { IsolatedFileResponseInfo } from './IsolatedFileResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIsolatedFileResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<IsolatedFileResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListIsolatedFileResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<IsolatedFileResponseInfo>): ListIsolatedFileResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<IsolatedFileResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<IsolatedFileResponseInfo> | undefined {
        return this['data_list'];
    }
}