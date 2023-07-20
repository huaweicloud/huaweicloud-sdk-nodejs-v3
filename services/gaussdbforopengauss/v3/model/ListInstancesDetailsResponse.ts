import { ListInstanceResult } from './ListInstanceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesDetailsResponse extends SdkResponse {
    public instances?: Array<ListInstanceResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ListInstanceResult>): ListInstancesDetailsResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstancesDetailsResponse {
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