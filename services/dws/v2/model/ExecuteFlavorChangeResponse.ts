
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteFlavorChangeResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ExecuteFlavorChangeResponse {
        this['body'] = body;
        return this;
    }
}