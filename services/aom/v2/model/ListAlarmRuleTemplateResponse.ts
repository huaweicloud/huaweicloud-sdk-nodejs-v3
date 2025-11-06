import { AlarmRuleTemplateBody } from './AlarmRuleTemplateBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmRuleTemplateResponse extends SdkResponse {
    private 'alarm_rule_templates'?: Array<AlarmRuleTemplateBody>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarmRuleTemplates(alarmRuleTemplates: Array<AlarmRuleTemplateBody>): ListAlarmRuleTemplateResponse {
        this['alarm_rule_templates'] = alarmRuleTemplates;
        return this;
    }
    public set alarmRuleTemplates(alarmRuleTemplates: Array<AlarmRuleTemplateBody>  | undefined) {
        this['alarm_rule_templates'] = alarmRuleTemplates;
    }
    public get alarmRuleTemplates(): Array<AlarmRuleTemplateBody> | undefined {
        return this['alarm_rule_templates'];
    }
    public withCount(count: number): ListAlarmRuleTemplateResponse {
        this['count'] = count;
        return this;
    }
}