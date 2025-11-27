import { ConfigurationModifyHistoryInfo } from './ConfigurationModifyHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigurationModifyHistoryResponse extends SdkResponse {
    public histories?: Array<ConfigurationModifyHistoryInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ConfigurationModifyHistoryInfo>): ShowInstanceConfigurationModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
    public withTotalCount(totalCount: number): ShowInstanceConfigurationModifyHistoryResponse {
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