
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuthMethodConfigResponse extends SdkResponse {
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): UpdateAuthMethodConfigResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}