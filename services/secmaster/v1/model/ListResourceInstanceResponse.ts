import { ResourceInfo } from './ResourceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceInstanceResponse extends SdkResponse {
    public resources?: Array<ResourceInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceInfo>): ListResourceInstanceResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListResourceInstanceResponse {
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