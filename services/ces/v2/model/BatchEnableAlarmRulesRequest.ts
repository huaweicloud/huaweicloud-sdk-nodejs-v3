import { BatchEnableAlarmsRequestBody } from './BatchEnableAlarmsRequestBody';


export class BatchEnableAlarmRulesRequest {
    public body?: BatchEnableAlarmsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchEnableAlarmsRequestBody): BatchEnableAlarmRulesRequest {
        this['body'] = body;
        return this;
    }
}