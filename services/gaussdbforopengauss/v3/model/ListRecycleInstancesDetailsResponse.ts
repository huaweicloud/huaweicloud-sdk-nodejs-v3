import { RecycleInstancesDetailResultV1 } from './RecycleInstancesDetailResultV1';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecycleInstancesDetailsResponse extends SdkResponse {
    private 'total_count'?: number;
    public instances?: Array<RecycleInstancesDetailResultV1>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListRecycleInstancesDetailsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInstances(instances: Array<RecycleInstancesDetailResultV1>): ListRecycleInstancesDetailsResponse {
        this['instances'] = instances;
        return this;
    }
}