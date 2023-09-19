
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartVpecpResponse extends SdkResponse {
    public action?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): StartVpecpResponse {
        this['action'] = action;
        return this;
    }
}