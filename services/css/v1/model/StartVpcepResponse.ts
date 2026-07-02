
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartVpcepResponse extends SdkResponse {
    public action?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): StartVpcepResponse {
        this['action'] = action;
        return this;
    }
}