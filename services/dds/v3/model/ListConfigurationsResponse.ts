import { ListConfigurationsResult } from './ListConfigurationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsResponse extends SdkResponse {
    private 'total_count'?: number;
    public configurations?: Array<ListConfigurationsResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListConfigurationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withConfigurations(configurations: Array<ListConfigurationsResult>): ListConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
}