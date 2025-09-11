
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartDbEncryptInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): StartDbEncryptInstanceResponse {
        this['result'] = result;
        return this;
    }
}