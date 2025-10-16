import { ReplicationInstanceInfo } from './ReplicationInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDistributorInstancesResponse extends SdkResponse {
    public instances?: Array<ReplicationInstanceInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ReplicationInstanceInfo>): ListDistributorInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListDistributorInstancesResponse {
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