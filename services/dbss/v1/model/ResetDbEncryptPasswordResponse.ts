
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetDbEncryptPasswordResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ResetDbEncryptPasswordResponse {
        this['result'] = result;
        return this;
    }
}