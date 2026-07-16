
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteWorkspaceResponse extends SdkResponse {
    private 'workspace_id'?: string;
    public constructor() { 
        super();
    }
    public withWorkspaceId(workspaceId: string): DeleteWorkspaceResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}