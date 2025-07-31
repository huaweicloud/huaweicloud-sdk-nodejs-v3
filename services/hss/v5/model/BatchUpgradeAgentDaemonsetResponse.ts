import { UpdateDaemonsetRespInfo } from './UpdateDaemonsetRespInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpgradeAgentDaemonsetResponse extends SdkResponse {
    private 'data_list'?: Array<UpdateDaemonsetRespInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<UpdateDaemonsetRespInfo>): BatchUpgradeAgentDaemonsetResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UpdateDaemonsetRespInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UpdateDaemonsetRespInfo> | undefined {
        return this['data_list'];
    }
}