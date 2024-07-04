import { ImageLocalInfo } from './ImageLocalInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageLocalResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageLocalInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageLocalResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageLocalInfo>): ListImageLocalResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageLocalInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageLocalInfo> | undefined {
        return this['data_list'];
    }
}