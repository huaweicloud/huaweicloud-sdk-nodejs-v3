import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResourceInstancesResponse extends SdkResponse {
    public resources?: Array<Resource>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resource>): ListInstanceResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListInstanceResourceInstancesResponse {
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