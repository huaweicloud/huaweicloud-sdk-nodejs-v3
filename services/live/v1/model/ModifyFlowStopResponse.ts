
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyFlowStopResponse extends SdkResponse {
    public status?: ModifyFlowStopResponseStatusEnum | string;
    private 'flow_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: ModifyFlowStopResponseStatusEnum | string): ModifyFlowStopResponse {
        this['status'] = status;
        return this;
    }
    public withFlowId(flowId: string): ModifyFlowStopResponse {
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
export enum ModifyFlowStopResponseStatusEnum {
    ACTIVE = 'ACTIVE',
    STANDBY = 'STANDBY'
}
