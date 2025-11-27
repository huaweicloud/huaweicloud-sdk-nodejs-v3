
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteResourceViewsResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): DeleteResourceViewsResponse {
        this['data'] = data;
        return this;
    }
}