import { PageInfo } from './PageInfo';
import { ResolverQueryLogConfig } from './ResolverQueryLogConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResolverQueryLogConfigsResponse extends SdkResponse {
    private 'resolver_query_log_configs'?: Array<ResolverQueryLogConfig>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResolverQueryLogConfigs(resolverQueryLogConfigs: Array<ResolverQueryLogConfig>): ListResolverQueryLogConfigsResponse {
        this['resolver_query_log_configs'] = resolverQueryLogConfigs;
        return this;
    }
    public set resolverQueryLogConfigs(resolverQueryLogConfigs: Array<ResolverQueryLogConfig>  | undefined) {
        this['resolver_query_log_configs'] = resolverQueryLogConfigs;
    }
    public get resolverQueryLogConfigs(): Array<ResolverQueryLogConfig> | undefined {
        return this['resolver_query_log_configs'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResolverQueryLogConfigsResponse {
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