import { InstanceInfo } from './InstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvInstancesResponse extends SdkResponse {
    private 'instance_info_list'?: Array<InstanceInfo>;
    private 'total_count'?: number;
    private 'online_count'?: number;
    private 'offline_count'?: number;
    private 'disable_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceInfoList(instanceInfoList: Array<InstanceInfo>): ListEnvInstancesResponse {
        this['instance_info_list'] = instanceInfoList;
        return this;
    }
    public set instanceInfoList(instanceInfoList: Array<InstanceInfo>  | undefined) {
        this['instance_info_list'] = instanceInfoList;
    }
    public get instanceInfoList(): Array<InstanceInfo> | undefined {
        return this['instance_info_list'];
    }
    public withTotalCount(totalCount: number): ListEnvInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withOnlineCount(onlineCount: number): ListEnvInstancesResponse {
        this['online_count'] = onlineCount;
        return this;
    }
    public set onlineCount(onlineCount: number  | undefined) {
        this['online_count'] = onlineCount;
    }
    public get onlineCount(): number | undefined {
        return this['online_count'];
    }
    public withOfflineCount(offlineCount: number): ListEnvInstancesResponse {
        this['offline_count'] = offlineCount;
        return this;
    }
    public set offlineCount(offlineCount: number  | undefined) {
        this['offline_count'] = offlineCount;
    }
    public get offlineCount(): number | undefined {
        return this['offline_count'];
    }
    public withDisableCount(disableCount: number): ListEnvInstancesResponse {
        this['disable_count'] = disableCount;
        return this;
    }
    public set disableCount(disableCount: number  | undefined) {
        this['disable_count'] = disableCount;
    }
    public get disableCount(): number | undefined {
        return this['disable_count'];
    }
}