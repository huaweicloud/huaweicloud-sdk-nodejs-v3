
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckInstanceForUpgradeResponse extends SdkResponse {
    private 'workflow_id'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): CheckInstanceForUpgradeResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withXRequestId(xRequestId: string): CheckInstanceForUpgradeResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}