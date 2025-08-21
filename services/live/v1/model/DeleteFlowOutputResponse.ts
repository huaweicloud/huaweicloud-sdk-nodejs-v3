
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFlowOutputResponse extends SdkResponse {
    private 'flow_id'?: string;
    private 'output_name'?: string;
    public constructor() { 
        super();
    }
    public withFlowId(flowId: string): DeleteFlowOutputResponse {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputName(outputName: string): DeleteFlowOutputResponse {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
}