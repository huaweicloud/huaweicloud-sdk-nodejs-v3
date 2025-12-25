import { ComponentConfiguration } from './ComponentConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentConfigurationResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ComponentConfiguration>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListComponentConfigurationResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ComponentConfiguration>): ListComponentConfigurationResponse {
        this['records'] = records;
        return this;
    }
}