import { RuleScopeInfo } from './RuleScopeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditRuleScopesNewResponse extends SdkResponse {
    public scopes?: Array<RuleScopeInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withScopes(scopes: Array<RuleScopeInfo>): ListAuditRuleScopesNewResponse {
        this['scopes'] = scopes;
        return this;
    }
    public withTotal(total: number): ListAuditRuleScopesNewResponse {
        this['total'] = total;
        return this;
    }
}