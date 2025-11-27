
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchLogCollectionStatusResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SwitchLogCollectionStatusResponse {
        this['body'] = body;
        return this;
    }
}