import { ImageFileResponseInfo } from './ImageFileResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGlobalImageFilesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageFileResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListGlobalImageFilesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageFileResponseInfo>): ListGlobalImageFilesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageFileResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageFileResponseInfo> | undefined {
        return this['data_list'];
    }
}