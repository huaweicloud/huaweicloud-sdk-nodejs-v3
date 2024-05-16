import { PageInfo } from './PageInfo';
import { ResourceTypesSummary } from './ResourceTypesSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTypesResponse extends SdkResponse {
    private 'resource_types'?: Array<ResourceTypesSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceTypes(resourceTypes: Array<ResourceTypesSummary>): ListResourceTypesResponse {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<ResourceTypesSummary>  | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes(): Array<ResourceTypesSummary> | undefined {
        return this['resource_types'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResourceTypesResponse {
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