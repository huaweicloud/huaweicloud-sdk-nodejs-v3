
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNewNodeAutoAddSwitchResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateNewNodeAutoAddSwitchResponse {
        this['result'] = result;
        return this;
    }
}