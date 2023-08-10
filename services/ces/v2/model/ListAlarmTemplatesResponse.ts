import { AlarmTemplates } from './AlarmTemplates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmTemplatesResponse extends SdkResponse {
    private 'alarm_templates'?: Array<AlarmTemplates>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarmTemplates(alarmTemplates: Array<AlarmTemplates>): ListAlarmTemplatesResponse {
        this['alarm_templates'] = alarmTemplates;
        return this;
    }
    public set alarmTemplates(alarmTemplates: Array<AlarmTemplates>  | undefined) {
        this['alarm_templates'] = alarmTemplates;
    }
    public get alarmTemplates(): Array<AlarmTemplates> | undefined {
        return this['alarm_templates'];
    }
    public withCount(count: number): ListAlarmTemplatesResponse {
        this['count'] = count;
        return this;
    }
}