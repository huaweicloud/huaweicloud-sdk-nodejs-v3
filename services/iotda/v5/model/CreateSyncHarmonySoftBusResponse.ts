
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSyncHarmonySoftBusResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CreateSyncHarmonySoftBusResponse {
        this['body'] = body;
        return this;
    }
}