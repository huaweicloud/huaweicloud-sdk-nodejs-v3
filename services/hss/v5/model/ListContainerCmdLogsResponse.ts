import { ContainerCmdLogResponseInfo } from './ContainerCmdLogResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListContainerCmdLogsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ContainerCmdLogResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListContainerCmdLogsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ContainerCmdLogResponseInfo>): ListContainerCmdLogsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ContainerCmdLogResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ContainerCmdLogResponseInfo> | undefined {
        return this['data_list'];
    }
}