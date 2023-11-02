import { RuleScopeInfo } from './RuleScopeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditRuleScopesResponse extends SdkResponse {
    public scopes?: Array<RuleScopeInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withScopes(scopes: Array<RuleScopeInfo>): ListAuditRuleScopesResponse {
        this['scopes'] = scopes;
        return this;
    }
    public withTotal(total: number): ListAuditRuleScopesResponse {
        this['total'] = total;
        return this;
    }
}