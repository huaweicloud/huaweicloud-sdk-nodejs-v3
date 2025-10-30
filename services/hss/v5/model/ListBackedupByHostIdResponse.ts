import { BackCopyByHostIdResponse } from './BackCopyByHostIdResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackedupByHostIdResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<BackCopyByHostIdResponse>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBackedupByHostIdResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<BackCopyByHostIdResponse>): ListBackedupByHostIdResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BackCopyByHostIdResponse>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BackCopyByHostIdResponse> | undefined {
        return this['data_list'];
    }
}