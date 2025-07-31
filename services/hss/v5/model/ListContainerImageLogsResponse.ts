import { ContainerImageLogResponseInfo } from './ContainerImageLogResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerImageLogsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ContainerImageLogResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerImageLogsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ContainerImageLogResponseInfo>): ListContainerImageLogsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ContainerImageLogResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ContainerImageLogResponseInfo> | undefined {
        return this['data_list'];
    }
}