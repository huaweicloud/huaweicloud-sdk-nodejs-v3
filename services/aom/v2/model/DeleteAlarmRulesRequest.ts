import { DeleteAlarmRulesBody } from './DeleteAlarmRulesBody';


export class DeleteAlarmRulesRequest {
    public body?: DeleteAlarmRulesBody;
    public constructor() { 
    }
    public withBody(body: DeleteAlarmRulesBody): DeleteAlarmRulesRequest {
        this['body'] = body;
        return this;
    }
}