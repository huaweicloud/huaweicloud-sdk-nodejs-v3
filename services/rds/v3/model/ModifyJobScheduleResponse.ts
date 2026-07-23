
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyJobScheduleResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): ModifyJobScheduleResponse {
        this['resp'] = resp;
        return this;
    }
}