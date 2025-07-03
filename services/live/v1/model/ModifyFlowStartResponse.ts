
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyFlowStartResponse extends SdkResponse {
    public status?: ModifyFlowStartResponseStatusEnum | string;
    private 'flow_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: ModifyFlowStartResponseStatusEnum | string): ModifyFlowStartResponse {
        this['status'] = status;
        return this;
    }
    public withFlowId(flowId: string): ModifyFlowStartResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ModifyFlowStartResponseStatusEnum {
    ACTIVE = 'ACTIVE',
    STANDBY = 'STANDBY'
}
