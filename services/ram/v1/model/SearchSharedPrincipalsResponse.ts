import { PageInfo } from './PageInfo';
import { SharedPrincipal } from './SharedPrincipal';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchSharedPrincipalsResponse extends SdkResponse {
    private 'shared_principals'?: Array<SharedPrincipal>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSharedPrincipals(sharedPrincipals: Array<SharedPrincipal>): SearchSharedPrincipalsResponse {
        this['shared_principals'] = sharedPrincipals;
        return this;
    }
    public set sharedPrincipals(sharedPrincipals: Array<SharedPrincipal>  | undefined) {
        this['shared_principals'] = sharedPrincipals;
    }
    public get sharedPrincipals(): Array<SharedPrincipal> | undefined {
        return this['shared_principals'];
    }
    public withPageInfo(pageInfo: PageInfo): SearchSharedPrincipalsResponse {
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