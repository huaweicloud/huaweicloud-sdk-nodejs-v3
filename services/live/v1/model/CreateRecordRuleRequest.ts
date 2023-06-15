import { RecordRuleRequest } from './RecordRuleRequest';


export class CreateRecordRuleRequest {
    public body?: RecordRuleRequest;
    public constructor() { 
    }
    public withBody(body: RecordRuleRequest): CreateRecordRuleRequest {
        this['body'] = body;
        return this;
    }
}