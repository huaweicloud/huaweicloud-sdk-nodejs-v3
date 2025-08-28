import { ImageScanTaskInfo } from './ImageScanTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageScanTaskResponse extends SdkResponse {
    private 'data_list'?: Array<ImageScanTaskInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<ImageScanTaskInfo>): ListImageScanTaskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageScanTaskInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageScanTaskInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListImageScanTaskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}