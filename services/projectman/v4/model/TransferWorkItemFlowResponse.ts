
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferWorkItemFlowResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): TransferWorkItemFlowResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): TransferWorkItemFlowResponse {
        this['message'] = message;
        return this;
    }
}