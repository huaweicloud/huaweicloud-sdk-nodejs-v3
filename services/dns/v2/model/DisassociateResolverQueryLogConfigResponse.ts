import { ResolverQueryLogConfig } from './ResolverQueryLogConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateResolverQueryLogConfigResponse extends SdkResponse {
    private 'resolver_query_log_config'?: ResolverQueryLogConfig;
    public constructor() { 
        super();
    }
    public withResolverQueryLogConfig(resolverQueryLogConfig: ResolverQueryLogConfig): DisassociateResolverQueryLogConfigResponse {
        this['resolver_query_log_config'] = resolverQueryLogConfig;
        return this;
    }
    public set resolverQueryLogConfig(resolverQueryLogConfig: ResolverQueryLogConfig  | undefined) {
        this['resolver_query_log_config'] = resolverQueryLogConfig;
    }
    public get resolverQueryLogConfig(): ResolverQueryLogConfig | undefined {
        return this['resolver_query_log_config'];
    }
}