import { ExportPolicyGroupsReq } from './ExportPolicyGroupsReq';


export class ExportPolicyGroupsRequest {
    public body?: ExportPolicyGroupsReq;
    public constructor() { 
    }
    public withBody(body: ExportPolicyGroupsReq): ExportPolicyGroupsRequest {
        this['body'] = body;
        return this;
    }
}