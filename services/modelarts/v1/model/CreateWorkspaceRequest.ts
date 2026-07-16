import { CreateWorkspaceReq } from './CreateWorkspaceReq';


export class CreateWorkspaceRequest {
    public body?: CreateWorkspaceReq;
    public constructor() { 
    }
    public withBody(body: CreateWorkspaceReq): CreateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}