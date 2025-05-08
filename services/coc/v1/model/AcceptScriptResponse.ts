
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptScriptResponse extends SdkResponse {
    public data?: boolean;
    public constructor() { 
        super();
    }
    public withData(data: boolean): AcceptScriptResponse {
        this['data'] = data;
        return this;
    }
}