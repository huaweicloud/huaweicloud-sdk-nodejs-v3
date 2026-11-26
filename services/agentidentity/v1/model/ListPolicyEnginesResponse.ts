import { PageInfo } from './PageInfo';
import { PolicyEngineSummary } from './PolicyEngineSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyEnginesResponse extends SdkResponse {
    private 'policy_engines'?: Array<PolicyEngineSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPolicyEngines(policyEngines: Array<PolicyEngineSummary>): ListPolicyEnginesResponse {
        this['policy_engines'] = policyEngines;
        return this;
    }
    public set policyEngines(policyEngines: Array<PolicyEngineSummary>  | undefined) {
        this['policy_engines'] = policyEngines;
    }
    public get policyEngines(): Array<PolicyEngineSummary> | undefined {
        return this['policy_engines'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPolicyEnginesResponse {
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