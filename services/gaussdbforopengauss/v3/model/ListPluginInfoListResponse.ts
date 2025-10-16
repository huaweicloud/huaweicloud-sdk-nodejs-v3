import { CustomerPluginInfoResult } from './CustomerPluginInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginInfoListResponse extends SdkResponse {
    private 'total_count'?: number;
    public plugins?: Array<CustomerPluginInfoResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListPluginInfoListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPlugins(plugins: Array<CustomerPluginInfoResult>): ListPluginInfoListResponse {
        this['plugins'] = plugins;
        return this;
    }
}