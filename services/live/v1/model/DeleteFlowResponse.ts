
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFlowResponse extends SdkResponse {
    public status?: string;
    private 'flow_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteFlowResponse {
        this['status'] = status;
        return this;
    }
    public withFlowId(flowId: string): DeleteFlowResponse {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
}