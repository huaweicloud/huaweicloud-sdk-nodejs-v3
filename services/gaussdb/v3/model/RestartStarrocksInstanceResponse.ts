
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartStarrocksInstanceResponse extends SdkResponse {
    private 'workflow_id'?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): RestartStarrocksInstanceResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
}