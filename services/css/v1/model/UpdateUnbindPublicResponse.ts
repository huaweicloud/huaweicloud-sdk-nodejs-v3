
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUnbindPublicResponse extends SdkResponse {
    public action?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): UpdateUnbindPublicResponse {
        this['action'] = action;
        return this;
    }
}