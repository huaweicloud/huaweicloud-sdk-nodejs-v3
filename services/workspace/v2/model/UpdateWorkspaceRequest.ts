import { ModifyWorkspaceAttributesReq } from './ModifyWorkspaceAttributesReq';


export class UpdateWorkspaceRequest {
    public body?: ModifyWorkspaceAttributesReq;
    public constructor() { 
    }
    public withBody(body: ModifyWorkspaceAttributesReq): UpdateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}