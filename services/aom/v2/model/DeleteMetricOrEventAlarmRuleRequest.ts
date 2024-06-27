import { DeleteAlarmRuleV4RequestBody } from './DeleteAlarmRuleV4RequestBody';


export class DeleteMetricOrEventAlarmRuleRequest {
    public body?: DeleteAlarmRuleV4RequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteAlarmRuleV4RequestBody): DeleteMetricOrEventAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}