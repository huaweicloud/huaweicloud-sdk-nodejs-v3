import { DeleteAiPolicyGroupsRequestInfo } from './DeleteAiPolicyGroupsRequestInfo';


export class DeleteAiPolicyGroupsRequest {
    public body?: DeleteAiPolicyGroupsRequestInfo;
    public constructor() { 
    }
    public withBody(body: DeleteAiPolicyGroupsRequestInfo): DeleteAiPolicyGroupsRequest {
        this['body'] = body;
        return this;
    }
}