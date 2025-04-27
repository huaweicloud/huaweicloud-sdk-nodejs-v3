import { ShowResolverRuleRespParam } from './ShowResolverRuleRespParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResolverRuleResponse extends SdkResponse {
    private 'resolver_rule'?: ShowResolverRuleRespParam;
    public constructor() { 
        super();
    }
    public withResolverRule(resolverRule: ShowResolverRuleRespParam): ShowResolverRuleResponse {
        this['resolver_rule'] = resolverRule;
        return this;
    }
    public set resolverRule(resolverRule: ShowResolverRuleRespParam  | undefined) {
        this['resolver_rule'] = resolverRule;
    }
    public get resolverRule(): ShowResolverRuleRespParam | undefined {
        return this['resolver_rule'];
    }
}