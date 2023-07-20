import { UpdateKeywordsAlarmRuleRequestBody } from './UpdateKeywordsAlarmRuleRequestBody';


export class UpdateKeywordsAlarmRuleRequest {
    private 'Content-Type'?: string;
    public body?: UpdateKeywordsAlarmRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): UpdateKeywordsAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateKeywordsAlarmRuleRequestBody): UpdateKeywordsAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}