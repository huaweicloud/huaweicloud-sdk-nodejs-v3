
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableScheduledTaskResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): EnableScheduledTaskResponse {
        this['data'] = data;
        return this;
    }
}