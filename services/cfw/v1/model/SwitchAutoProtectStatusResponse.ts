
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchAutoProtectStatusResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SwitchAutoProtectStatusResponse {
        this['body'] = body;
        return this;
    }
}