import { DistinctSharedPrincipal } from './DistinctSharedPrincipal';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDistinctPrincipalsResponse extends SdkResponse {
    private 'distinct_shared_principals'?: Array<DistinctSharedPrincipal>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withDistinctSharedPrincipals(distinctSharedPrincipals: Array<DistinctSharedPrincipal>): SearchDistinctPrincipalsResponse {
        this['distinct_shared_principals'] = distinctSharedPrincipals;
        return this;
    }
    public set distinctSharedPrincipals(distinctSharedPrincipals: Array<DistinctSharedPrincipal>  | undefined) {
        this['distinct_shared_principals'] = distinctSharedPrincipals;
    }
    public get distinctSharedPrincipals(): Array<DistinctSharedPrincipal> | undefined {
        return this['distinct_shared_principals'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchDistinctPrincipalsResponse {
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