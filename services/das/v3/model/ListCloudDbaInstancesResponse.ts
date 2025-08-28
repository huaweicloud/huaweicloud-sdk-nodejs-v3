import { DASInstanceInfo } from './DASInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudDbaInstancesResponse extends SdkResponse {
    private 'instance_list'?: Array<DASInstanceInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstanceList(instanceList: Array<DASInstanceInfo>): ListCloudDbaInstancesResponse {
        this['instance_list'] = instanceList;
        return this;
    }
    public set instanceList(instanceList: Array<DASInstanceInfo>  | undefined) {
        this['instance_list'] = instanceList;
    }
    public get instanceList(): Array<DASInstanceInfo> | undefined {
        return this['instance_list'];
    }
    public withTotalCount(totalCount: number): ListCloudDbaInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}