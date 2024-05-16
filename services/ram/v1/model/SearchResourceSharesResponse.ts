import { PageInfo } from './PageInfo';
import { ResourceShare } from './ResourceShare';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchResourceSharesResponse extends SdkResponse {
    private 'resource_shares'?: Array<ResourceShare>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceShares(resourceShares: Array<ResourceShare>): SearchResourceSharesResponse {
        this['resource_shares'] = resourceShares;
        return this;
    }
    public set resourceShares(resourceShares: Array<ResourceShare>  | undefined) {
        this['resource_shares'] = resourceShares;
    }
    public get resourceShares(): Array<ResourceShare> | undefined {
        return this['resource_shares'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchResourceSharesResponse {
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