import { ImageSensitiveInfo } from './ImageSensitiveInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageSensitiveInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageSensitiveInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageSensitiveInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageSensitiveInfo>): ListImageSensitiveInfoResponse {
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