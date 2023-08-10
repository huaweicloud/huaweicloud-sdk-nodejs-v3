import { ListAlarmResponseAlarms } from './ListAlarmResponseAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmRulesResponse extends SdkResponse {
    public alarms?: Array<ListAlarmResponseAlarms>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarms(alarms: Array<ListAlarmResponseAlarms>): ListAlarmRulesResponse {
        this['alarms'] = alarms;
        return this;
    }
    public withCount(count: number): ListAlarmRulesResponse {
        this['count'] = count;
        return this;
    }
}