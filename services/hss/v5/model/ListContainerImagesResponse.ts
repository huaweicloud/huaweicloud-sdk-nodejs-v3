import { ContainerImageInfo } from './ContainerImageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerImagesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ContainerImageInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerImagesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ContainerImageInfo>): ListContainerImagesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ContainerImageInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ContainerImageInfo> | undefined {
        return this['data_list'];
    }
}