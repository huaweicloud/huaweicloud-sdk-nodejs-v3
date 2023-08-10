import { ListAssociationAlarmsResponseAlarms } from './ListAssociationAlarmsResponseAlarms';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmTemplateAssociationAlarmsResponse extends SdkResponse {
    public alarms?: Array<ListAssociationAlarmsResponseAlarms>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarms(alarms: Array<ListAssociationAlarmsResponseAlarms>): ListAlarmTemplateAssociationAlarmsResponse {
        this['alarms'] = alarms;
        return this;
    }
    public withCount(count: number): ListAlarmTemplateAssociationAlarmsResponse {
        this['count'] = count;
        return this;
    }
}