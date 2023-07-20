import { RecordRuleRequest } from './RecordRuleRequest';


export class UpdateRecordRuleRequest {
    public id?: string;
    public body?: RecordRuleRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateRecordRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: RecordRuleRequest): UpdateRecordRuleRequest {
        this['body'] = body;
        return this;
    }
}