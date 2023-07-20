import { ConfigurationSummary } from './ConfigurationSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlConfigurationsResponse extends SdkResponse {
    public configurations?: Array<ConfigurationSummary>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<ConfigurationSummary>): ListGaussMySqlConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withTotalCount(totalCount: number): ListGaussMySqlConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}