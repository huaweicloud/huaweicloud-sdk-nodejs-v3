
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteScheduledTaskResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): DeleteScheduledTaskResponse {
        this['data'] = data;
        return this;
    }
}