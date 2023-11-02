import { ResourceInstanceResponseResources } from './ResourceInstanceResponseResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountResourceInstanceByTagResponse extends SdkResponse {
    public resources?: Array<ResourceInstanceResponseResources>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceInstanceResponseResources>): CountResourceInstanceByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): CountResourceInstanceByTagResponse {
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