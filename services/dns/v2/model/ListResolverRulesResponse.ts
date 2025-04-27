import { ListResolverRuleParam } from './ListResolverRuleParam';
import { Metadata } from './Metadata';
import { PageInfo } from './PageInfo';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResolverRulesResponse extends SdkResponse {
    private 'resolver_rules'?: Array<ListResolverRuleParam>;
    public links?: PageLink;
    public metadata?: Metadata;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResolverRules(resolverRules: Array<ListResolverRuleParam>): ListResolverRulesResponse {
        this['resolver_rules'] = resolverRules;
        return this;
    }
    public set resolverRules(resolverRules: Array<ListResolverRuleParam>  | undefined) {
        this['resolver_rules'] = resolverRules;
    }
    public get resolverRules(): Array<ListResolverRuleParam> | undefined {
        return this['resolver_rules'];
    }
    public withLinks(links: PageLink): ListResolverRulesResponse {
        this['links'] = links;
        return this;
    }
    public withMetadata(metadata: Metadata): ListResolverRulesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListResolverRulesResponse {
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