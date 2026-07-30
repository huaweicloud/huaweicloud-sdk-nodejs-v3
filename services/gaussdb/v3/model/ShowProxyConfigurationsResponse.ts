import { ProxyConfiguration } from './ProxyConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProxyConfigurationsResponse extends SdkResponse {
    private 'total_count'?: number;
    public configurations?: Array<ProxyConfiguration>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowProxyConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withConfigurations(configurations: Array<ProxyConfiguration>): ShowProxyConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}