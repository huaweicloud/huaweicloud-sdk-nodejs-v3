import { PageInfo } from './PageInfo';
import { ResourceEntity } from './ResourceEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrackedResourcesResponse extends SdkResponse {
    public resources?: Array<ResourceEntity>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceEntity>): ListTrackedResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListTrackedResourcesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}