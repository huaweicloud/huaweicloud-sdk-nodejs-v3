import { PageInfo } from './PageInfo';
import { SharedResource } from './SharedResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchSharedResourcesResponse extends SdkResponse {
    private 'shared_resources'?: Array<SharedResource>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSharedResources(sharedResources: Array<SharedResource>): SearchSharedResourcesResponse {
        this['shared_resources'] = sharedResources;
        return this;
    }
    public set sharedResources(sharedResources: Array<SharedResource>  | undefined) {
        this['shared_resources'] = sharedResources;
    }
    public get sharedResources(): Array<SharedResource> | undefined {
        return this['shared_resources'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchSharedResourcesResponse {
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