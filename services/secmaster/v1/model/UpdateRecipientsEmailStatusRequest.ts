import { UpdateRecipientsStatusRequestBody } from './UpdateRecipientsStatusRequestBody';


export class UpdateRecipientsEmailStatusRequest {
    private 'workspace_id'?: string;
    public body?: UpdateRecipientsStatusRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UpdateRecipientsEmailStatusRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: UpdateRecipientsStatusRequestBody): UpdateRecipientsEmailStatusRequest {
        this['body'] = body;
        return this;
    }
}