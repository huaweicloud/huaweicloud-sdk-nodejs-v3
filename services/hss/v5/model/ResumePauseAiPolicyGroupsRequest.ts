import { ResumePauseAiPolicyGroupsRequestInfo } from './ResumePauseAiPolicyGroupsRequestInfo';


export class ResumePauseAiPolicyGroupsRequest {
    public body?: ResumePauseAiPolicyGroupsRequestInfo;
    public constructor() { 
    }
    public withBody(body: ResumePauseAiPolicyGroupsRequestInfo): ResumePauseAiPolicyGroupsRequest {
        this['body'] = body;
        return this;
    }
}