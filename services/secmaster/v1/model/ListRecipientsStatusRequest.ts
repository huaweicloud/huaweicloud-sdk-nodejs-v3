import { ListRecipientsStatusRequestBody } from './ListRecipientsStatusRequestBody';


export class ListRecipientsStatusRequest {
    private 'workspace_id'?: string;
    public body?: ListRecipientsStatusRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListRecipientsStatusRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ListRecipientsStatusRequestBody): ListRecipientsStatusRequest {
        this['body'] = body;
        return this;
    }
}