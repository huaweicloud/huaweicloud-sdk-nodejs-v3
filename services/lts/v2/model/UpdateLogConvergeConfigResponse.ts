
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogConvergeConfigResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateLogConvergeConfigResponse {
        this['status'] = status;
        return this;
    }
}