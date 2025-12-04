import { AutoCesAlarmInfo } from './AutoCesAlarmInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoCesAlarmResponse extends SdkResponse {
    public entities?: Array<AutoCesAlarmInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withEntities(entities: Array<AutoCesAlarmInfo>): ShowAutoCesAlarmResponse {
        this['entities'] = entities;
        return this;
    }
    public withCount(count: number): ShowAutoCesAlarmResponse {
        this['count'] = count;
        return this;
    }
}