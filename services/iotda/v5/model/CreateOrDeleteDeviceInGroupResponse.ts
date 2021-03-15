
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrDeleteDeviceInGroupResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CreateOrDeleteDeviceInGroupResponse {
        this['body'] = body;
        return this;
    }
}