import { CopyAiPolicyGroupRequestInfo } from './CopyAiPolicyGroupRequestInfo';


export class CopyAiPolicyGroupRequest {
    public body?: CopyAiPolicyGroupRequestInfo;
    public constructor() { 
    }
    public withBody(body: CopyAiPolicyGroupRequestInfo): CopyAiPolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}