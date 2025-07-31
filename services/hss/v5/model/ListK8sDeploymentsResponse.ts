import { ServerlessDeploymentInfo } from './ServerlessDeploymentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListK8sDeploymentsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    public type?: string;
    private 'resources_info_list'?: Array<ServerlessDeploymentInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListK8sDeploymentsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListK8sDeploymentsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withType(type: string): ListK8sDeploymentsResponse {
        this['type'] = type;
        return this;
    }
    public withResourcesInfoList(resourcesInfoList: Array<ServerlessDeploymentInfo>): ListK8sDeploymentsResponse {
        this['resources_info_list'] = resourcesInfoList;
        return this;
    }
    public set resourcesInfoList(resourcesInfoList: Array<ServerlessDeploymentInfo>  | undefined) {
        this['resources_info_list'] = resourcesInfoList;
    }
    public get resourcesInfoList(): Array<ServerlessDeploymentInfo> | undefined {
        return this['resources_info_list'];
    }
}