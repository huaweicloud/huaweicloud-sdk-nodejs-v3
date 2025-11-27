
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountOtherResourceResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): CountOtherResourceResponse {
        this['data'] = data;
        return this;
    }
}