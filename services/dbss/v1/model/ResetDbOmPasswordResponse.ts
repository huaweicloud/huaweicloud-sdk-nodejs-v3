
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetDbOmPasswordResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ResetDbOmPasswordResponse {
        this['result'] = result;
        return this;
    }
}