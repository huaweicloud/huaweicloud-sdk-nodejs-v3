
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHtapQueryQueuesControlResponse extends SdkResponse {
    public status?: string;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateHtapQueryQueuesControlResponse {
        this['status'] = status;
        return this;
    }
    public withMsg(msg: string): UpdateHtapQueryQueuesControlResponse {
        this['msg'] = msg;
        return this;
    }
}