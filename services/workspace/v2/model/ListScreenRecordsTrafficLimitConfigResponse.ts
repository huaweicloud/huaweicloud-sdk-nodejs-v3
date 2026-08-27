import { UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs } from './UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScreenRecordsTrafficLimitConfigResponse extends SdkResponse {
    private 'total_count'?: number;
    public configs?: Array<UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListScreenRecordsTrafficLimitConfigResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withConfigs(configs: Array<UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs>): ListScreenRecordsTrafficLimitConfigResponse {
        this['configs'] = configs;
        return this;
    }
}