import { ResumePauseCustomRuleIdsRequestInfo } from './ResumePauseCustomRuleIdsRequestInfo';


export class ResumePauseCustomRuleConfigRequest {
    public body?: ResumePauseCustomRuleIdsRequestInfo;
    public constructor() { 
    }
    public withBody(body: ResumePauseCustomRuleIdsRequestInfo): ResumePauseCustomRuleConfigRequest {
        this['body'] = body;
        return this;
    }
}