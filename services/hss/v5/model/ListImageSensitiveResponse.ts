import { ImageSensitiveInfo } from './ImageSensitiveInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageSensitiveResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageSensitiveInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageSensitiveResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageSensitiveInfo>): ListImageSensitiveResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageSensitiveInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageSensitiveInfo> | undefined {
        return this['data_list'];
    }
}