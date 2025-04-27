import { ResolverRuleParam } from './ResolverRuleParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateResolverRuleResponse extends SdkResponse {
    private 'resolver_rule'?: ResolverRuleParam;
    public constructor() { 
        super();
    }
    public withResolverRule(resolverRule: ResolverRuleParam): CreateResolverRuleResponse {
        this['resolver_rule'] = resolverRule;
        return this;
    }
    public set resolverRule(resolverRule: ResolverRuleParam  | undefined) {
        this['resolver_rule'] = resolverRule;
    }
    public get resolverRule(): ResolverRuleParam | undefined {
        return this['resolver_rule'];
    }
}