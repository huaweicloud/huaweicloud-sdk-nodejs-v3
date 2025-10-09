import { PageInfo } from './PageInfo';
import { PolicyVersion } from './PolicyVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyVersionsV5Response extends SdkResponse {
    public versions?: Array<PolicyVersion>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<PolicyVersion>): ListPolicyVersionsV5Response {
        this['versions'] = versions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPolicyVersionsV5Response {
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