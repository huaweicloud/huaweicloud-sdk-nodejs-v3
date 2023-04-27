import { CreateKeywordsAlarmRuleRequestBody } from './CreateKeywordsAlarmRuleRequestBody';


export class CreateKeywordsAlarmRuleRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateKeywordsAlarmRuleRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateKeywordsAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateKeywordsAlarmRuleRequestBody): CreateKeywordsAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}