import { ImageVulInfo } from './ImageVulInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageVulnerabilitiesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageVulInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageVulnerabilitiesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageVulInfo>): ListImageVulnerabilitiesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageVulInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageVulInfo> | undefined {
        return this['data_list'];
    }
}