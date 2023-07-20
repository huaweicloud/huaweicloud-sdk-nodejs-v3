import { ListDedicatedResourceResult } from './ListDedicatedResourceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedResourcesResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<ListDedicatedResourceResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDedicatedResourcesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<ListDedicatedResourceResult>): ListDedicatedResourcesResponse {
        this['resources'] = resources;
        return this;
    }
}