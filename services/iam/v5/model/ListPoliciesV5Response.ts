import { PageInfo } from './PageInfo';
import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesV5Response extends SdkResponse {
    public policies?: Array<Policy>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<Policy>): ListPoliciesV5Response {
        this['policies'] = policies;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPoliciesV5Response {
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