import { PageInfo } from './PageInfo';
import { PrivateModuleVersionSummary } from './PrivateModuleVersionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateModuleVersionsResponse extends SdkResponse {
    public versions?: Array<PrivateModuleVersionSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<PrivateModuleVersionSummary>): ListPrivateModuleVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateModuleVersionsResponse {
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