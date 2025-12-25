import { ComponentConfigurationInfo } from './ComponentConfigurationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryComponentConfigurationResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ComponentConfigurationInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListHistoryComponentConfigurationResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ComponentConfigurationInfo>): ListHistoryComponentConfigurationResponse {
        this['records'] = records;
        return this;
    }
}