
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchOverClusterResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): SwitchOverClusterResponse {
        this['body'] = body;
        return this;
    }
}