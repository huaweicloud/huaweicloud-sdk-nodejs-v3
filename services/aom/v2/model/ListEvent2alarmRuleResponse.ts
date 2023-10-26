import { Event2alarmRuleBody } from './Event2alarmRuleBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEvent2alarmRuleResponse extends SdkResponse {
    public body?: Array<Event2alarmRuleBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Event2alarmRuleBody>): ListEvent2alarmRuleResponse {
        this['body'] = body;
        return this;
    }
}