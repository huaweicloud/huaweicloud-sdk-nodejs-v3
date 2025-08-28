import { ImageWhiteListDetailResponseInfo } from './ImageWhiteListDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageWhiteListsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageWhiteListDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageWhiteListsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageWhiteListDetailResponseInfo>): ListImageWhiteListsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageWhiteListDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageWhiteListDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}