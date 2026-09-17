import { TagFilter } from './TagFilter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceByTagResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<TagFilter>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListResourceByTagResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<TagFilter>): ListResourceByTagResponse {
        this['resources'] = resources;
        return this;
    }
}