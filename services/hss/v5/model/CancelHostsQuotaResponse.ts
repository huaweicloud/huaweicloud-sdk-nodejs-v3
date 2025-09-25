
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelHostsQuotaResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CancelHostsQuotaResponse {
        this['body'] = body;
        return this;
    }
}