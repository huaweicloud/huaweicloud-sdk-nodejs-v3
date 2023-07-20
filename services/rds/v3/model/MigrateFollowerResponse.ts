
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateFollowerResponse extends SdkResponse {
    public workflowId?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): MigrateFollowerResponse {
        this['workflowId'] = workflowId;
        return this;
    }
}