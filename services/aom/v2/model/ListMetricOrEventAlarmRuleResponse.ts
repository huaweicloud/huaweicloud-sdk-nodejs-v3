import { AlarmParamForV4Db } from './AlarmParamForV4Db';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricOrEventAlarmRuleResponse extends SdkResponse {
    private 'alarm_rules'?: Array<AlarmParamForV4Db>;
    public metadata?: object;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarmRules(alarmRules: Array<AlarmParamForV4Db>): ListMetricOrEventAlarmRuleResponse {
        this['alarm_rules'] = alarmRules;
        return this;
    }
    public set alarmRules(alarmRules: Array<AlarmParamForV4Db>  | undefined) {
        this['alarm_rules'] = alarmRules;
    }
    public get alarmRules(): Array<AlarmParamForV4Db> | undefined {
        return this['alarm_rules'];
    }
    public withMetadata(metadata: object): ListMetricOrEventAlarmRuleResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withCount(count: number): ListMetricOrEventAlarmRuleResponse {
        this['count'] = count;
        return this;
    }
}