import { PageInfo } from './PageInfo';
import { PrivateHookVersionSummary } from './PrivateHookVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateHookVersionsResponse extends SdkResponse {
    public versions?: Array<PrivateHookVersionSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<PrivateHookVersionSummary>): ListPrivateHookVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateHookVersionsResponse {
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