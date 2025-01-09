import { UnlockWorkspaceRequestBody } from './UnlockWorkspaceRequestBody';


export class UnlockWorkspaceRequest {
    public body?: UnlockWorkspaceRequestBody;
    public constructor() { 
    }
    public withBody(body: UnlockWorkspaceRequestBody): UnlockWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}