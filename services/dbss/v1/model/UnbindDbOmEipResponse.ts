
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnbindDbOmEipResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UnbindDbOmEipResponse {
        this['result'] = result;
        return this;
    }
}