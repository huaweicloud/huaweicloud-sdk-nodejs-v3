import { PageInfo } from './PageInfo';
import { PrivateProviderVersionSummary } from './PrivateProviderVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateProviderVersionsResponse extends SdkResponse {
    public versions?: Array<PrivateProviderVersionSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<PrivateProviderVersionSummary>): ListPrivateProviderVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateProviderVersionsResponse {
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