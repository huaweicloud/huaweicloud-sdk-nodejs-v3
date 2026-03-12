import { TagResource } from './TagResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCaResourceInstancesResponse extends SdkResponse {
    private 'total_count'?: number;
    public resources?: Array<TagResource>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListCaResourceInstancesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResources(resources: Array<TagResource>): ListCaResourceInstancesResponse {
        this['resources'] = resources;
        return this;
    }
}