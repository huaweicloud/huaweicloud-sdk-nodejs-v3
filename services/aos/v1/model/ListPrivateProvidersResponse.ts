import { PageInfo } from './PageInfo';
import { PrivateProviderSummary } from './PrivateProviderSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateProvidersResponse extends SdkResponse {
    public providers?: Array<PrivateProviderSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withProviders(providers: Array<PrivateProviderSummary>): ListPrivateProvidersResponse {
        this['providers'] = providers;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateProvidersResponse {
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