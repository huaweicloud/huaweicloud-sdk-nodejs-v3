import { ConfigurationDiffReqV3 } from './ConfigurationDiffReqV3';


export class CompareParameterGroupsRequest {
    public body?: ConfigurationDiffReqV3;
    public constructor() { 
    }
    public withBody(body: ConfigurationDiffReqV3): CompareParameterGroupsRequest {
        this['body'] = body;
        return this;
    }
}