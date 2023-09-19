
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBindPublicResponse extends SdkResponse {
    public action?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): CreateBindPublicResponse {
        this['action'] = action;
        return this;
    }
}