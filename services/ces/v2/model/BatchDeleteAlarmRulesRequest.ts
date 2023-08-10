import { BatchDeleteAlarmsRequestBody } from './BatchDeleteAlarmsRequestBody';


export class BatchDeleteAlarmRulesRequest {
    public body?: BatchDeleteAlarmsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteAlarmsRequestBody): BatchDeleteAlarmRulesRequest {
        this['body'] = body;
        return this;
    }
}