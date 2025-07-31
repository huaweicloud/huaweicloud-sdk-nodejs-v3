import { VulContainerInfo } from './VulContainerInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulContainersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<VulContainerInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListVulContainersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<VulContainerInfo>): ListVulContainersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<VulContainerInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<VulContainerInfo> | undefined {
        return this['data_list'];
    }
}