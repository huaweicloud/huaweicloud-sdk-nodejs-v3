
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebootDbOmInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RebootDbOmInstanceResponse {
        this['result'] = result;
        return this;
    }
}