import { CreateSqlAlarmRuleRequestBody } from './CreateSqlAlarmRuleRequestBody';


export class CreateSqlAlarmRuleRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateSqlAlarmRuleRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateSqlAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateSqlAlarmRuleRequestBody): CreateSqlAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}