
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueuesResponse extends SdkResponse {
    public data?: Array<object>;
    public constructor() { 
        super();
    }
    public withData(data: Array<object>): ShowQueuesResponse {
        this['data'] = data;
        return this;
    }
}