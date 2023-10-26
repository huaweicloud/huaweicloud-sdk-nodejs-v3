import { ContainerNodeInfo } from './ContainerNodeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerNodesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ContainerNodeInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerNodesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ContainerNodeInfo>): ListContainerNodesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ContainerNodeInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ContainerNodeInfo> | undefined {
        return this['data_list'];
    }
}