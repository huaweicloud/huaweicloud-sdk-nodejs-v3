
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkspaceResponse extends SdkResponse {
    private 'workspace_id'?: string;
    public constructor() { 
        super();
    }
    public withWorkspaceId(workspaceId: string): UpdateWorkspaceResponse {
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