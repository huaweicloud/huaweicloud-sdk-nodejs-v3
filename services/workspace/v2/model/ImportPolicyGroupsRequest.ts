import { ImportPolicyGroupsRequestBody } from './ImportPolicyGroupsRequestBody';


export class ImportPolicyGroupsRequest {
    public body?: ImportPolicyGroupsRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportPolicyGroupsRequestBody): ImportPolicyGroupsRequest {
        this['body'] = body;
        return this;
    }
}