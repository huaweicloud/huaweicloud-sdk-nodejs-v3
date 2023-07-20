import { CreateKeywordsAlarmRuleRequestBody } from './CreateKeywordsAlarmRuleRequestBody';


export class CreateKeywordsAlarmRuleRequest {
    private 'Content-Type'?: string;
    public body?: CreateKeywordsAlarmRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateKeywordsAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateKeywordsAlarmRuleRequestBody): CreateKeywordsAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}