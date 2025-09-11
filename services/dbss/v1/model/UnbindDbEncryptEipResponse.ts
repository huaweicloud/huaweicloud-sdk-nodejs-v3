
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnbindDbEncryptEipResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UnbindDbEncryptEipResponse {
        this['result'] = result;
        return this;
    }
}