import { PageInfo } from './PageInfo';
import { PolicySummary } from './PolicySummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesResponse extends SdkResponse {
    public policies?: Array<PolicySummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<PolicySummary>): ListPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPoliciesResponse {
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