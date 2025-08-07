import { DistinctSharedResource } from './DistinctSharedResource';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDistinctSharedResourcesResponse extends SdkResponse {
    private 'distinct_shared_resources'?: Array<DistinctSharedResource>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withDistinctSharedResources(distinctSharedResources: Array<DistinctSharedResource>): SearchDistinctSharedResourcesResponse {
        this['distinct_shared_resources'] = distinctSharedResources;
        return this;
    }
    public set distinctSharedResources(distinctSharedResources: Array<DistinctSharedResource>  | undefined) {
        this['distinct_shared_resources'] = distinctSharedResources;
    }
    public get distinctSharedResources(): Array<DistinctSharedResource> | undefined {
        return this['distinct_shared_resources'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchDistinctSharedResourcesResponse {
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