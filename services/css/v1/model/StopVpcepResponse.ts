
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopVpcepResponse extends SdkResponse {
    public action?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): StopVpcepResponse {
        this['action'] = action;
        return this;
    }
}