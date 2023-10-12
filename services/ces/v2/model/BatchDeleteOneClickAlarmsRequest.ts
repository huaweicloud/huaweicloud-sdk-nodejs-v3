import { BatchDeleteOneClickAlarmsRequestBody } from './BatchDeleteOneClickAlarmsRequestBody';


export class BatchDeleteOneClickAlarmsRequest {
    public body?: BatchDeleteOneClickAlarmsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteOneClickAlarmsRequestBody): BatchDeleteOneClickAlarmsRequest {
        this['body'] = body;
        return this;
    }
}