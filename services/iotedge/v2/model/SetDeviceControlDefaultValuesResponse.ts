
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetDeviceControlDefaultValuesResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SetDeviceControlDefaultValuesResponse {
        this['body'] = body;
        return this;
    }
}