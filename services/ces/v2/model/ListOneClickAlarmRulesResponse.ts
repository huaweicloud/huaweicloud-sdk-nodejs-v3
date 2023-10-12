import { ListAlarmsRespAlarms } from './ListAlarmsRespAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOneClickAlarmRulesResponse extends SdkResponse {
    public alarms?: Array<ListAlarmsRespAlarms>;
    public constructor() { 
        super();
    }
    public withAlarms(alarms: Array<ListAlarmsRespAlarms>): ListOneClickAlarmRulesResponse {
        this['alarms'] = alarms;
        return this;
    }
}