
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncMultiCloudResourceResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): SyncMultiCloudResourceResponse {
        this['data'] = data;
        return this;
    }
}