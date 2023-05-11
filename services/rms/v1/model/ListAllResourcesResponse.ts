import { PageInfo } from './PageInfo';
import { ResourceEntity } from './ResourceEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllResourcesResponse extends SdkResponse {
    public resources?: Array<ResourceEntity>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceEntity>): ListAllResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAllResourcesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}