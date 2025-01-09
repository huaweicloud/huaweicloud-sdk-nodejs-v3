import { ApplyWorkspaceReq } from './ApplyWorkspaceReq';


export class ApplyWorkspaceRequest {
    public body?: ApplyWorkspaceReq;
    public constructor() { 
    }
    public withBody(body: ApplyWorkspaceReq): ApplyWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}