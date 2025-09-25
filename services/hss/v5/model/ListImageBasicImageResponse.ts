import { ImageBasicImageInfo } from './ImageBasicImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageBasicImageResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageBasicImageInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageBasicImageResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageBasicImageInfo>): ListImageBasicImageResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageBasicImageInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageBasicImageInfo> | undefined {
        return this['data_list'];
    }
}