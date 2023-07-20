import { InstanceResult } from './InstanceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesByResourceTagsResponse extends SdkResponse {
    public instances?: Array<InstanceResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<InstanceResult>): ListInstancesByResourceTagsResponse {
        this['instances'] = instances;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstancesByResourceTagsResponse {
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