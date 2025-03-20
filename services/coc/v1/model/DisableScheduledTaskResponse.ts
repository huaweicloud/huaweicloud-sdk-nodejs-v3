
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableScheduledTaskResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): DisableScheduledTaskResponse {
        this['data'] = data;
        return this;
    }
}