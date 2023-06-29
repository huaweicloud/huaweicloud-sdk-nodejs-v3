import { PageInfo } from './PageInfo';
import { ResourceIdentifier } from './ResourceIdentifier';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAggregateDiscoveredResourcesResponse extends SdkResponse {
    private 'resource_identifiers'?: Array<ResourceIdentifier> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withResourceIdentifiers(resourceIdentifiers: Array<ResourceIdentifier>): ListAggregateDiscoveredResourcesResponse {
        this['resource_identifiers'] = resourceIdentifiers;
        return this;
    }
    public set resourceIdentifiers(resourceIdentifiers: Array<ResourceIdentifier> | undefined) {
        this['resource_identifiers'] = resourceIdentifiers;
    }
    public get resourceIdentifiers() {
        return this['resource_identifiers'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAggregateDiscoveredResourcesResponse {
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