import { ResumePauseAiPoliciesRequestInfo } from './ResumePauseAiPoliciesRequestInfo';


export class ResumePauseAiPoliciesRequest {
    public body?: ResumePauseAiPoliciesRequestInfo;
    public constructor() { 
    }
    public withBody(body: ResumePauseAiPoliciesRequestInfo): ResumePauseAiPoliciesRequest {
        this['body'] = body;
        return this;
    }
}