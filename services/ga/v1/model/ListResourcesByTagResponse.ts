import { ResourceTags } from './ResourceTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesByTagResponse extends SdkResponse {
    public resources?: Array<ResourceTags>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceTags>): ListResourcesByTagResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListResourcesByTagResponse {
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