import { ProxyConfiguration } from './ProxyConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyConfigurationsResponse extends SdkResponse {
    private 'total_count'?: string;
    public configurations?: Array<ProxyConfiguration>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: string): ShowProxyConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
    public withConfigurations(configurations: Array<ProxyConfiguration>): ShowProxyConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}