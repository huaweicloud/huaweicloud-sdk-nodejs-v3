import { PageInfoDto } from './PageInfoDto';
import { PolicySummaryDto } from './PolicySummaryDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesResponse extends SdkResponse {
    public policies?: Array<PolicySummaryDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<PolicySummaryDto>): ListPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListPoliciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}