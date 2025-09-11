
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BindDbEncryptEipResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): BindDbEncryptEipResponse {
        this['result'] = result;
        return this;
    }
}