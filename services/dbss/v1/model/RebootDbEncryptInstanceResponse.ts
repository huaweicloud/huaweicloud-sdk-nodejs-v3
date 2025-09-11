
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebootDbEncryptInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RebootDbEncryptInstanceResponse {
        this['result'] = result;
        return this;
    }
}