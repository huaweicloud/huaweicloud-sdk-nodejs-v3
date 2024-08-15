
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecutePublicScriptResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): ExecutePublicScriptResponse {
        this['data'] = data;
        return this;
    }
}