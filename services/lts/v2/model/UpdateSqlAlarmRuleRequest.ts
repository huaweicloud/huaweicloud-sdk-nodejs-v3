import { UpdateSqlAlarmRuleRequestBody } from './UpdateSqlAlarmRuleRequestBody';


export class UpdateSqlAlarmRuleRequest {
    private 'Content-Type': string | undefined;
    public body?: UpdateSqlAlarmRuleRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateSqlAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: UpdateSqlAlarmRuleRequestBody): UpdateSqlAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}