import { RecycleInstanceV3 } from './RecycleInstanceV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecycleInstancesResponse extends SdkResponse {
    private 'total_count'?: number;
    public instances?: Array<RecycleInstanceV3>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRecycleInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstances(instances: Array<RecycleInstanceV3>): ListRecycleInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}