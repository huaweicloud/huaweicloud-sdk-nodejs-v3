
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConcurrencyPackageUsingResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ShowConcurrencyPackageUsingResponse {
        this['body'] = body;
        return this;
    }
}