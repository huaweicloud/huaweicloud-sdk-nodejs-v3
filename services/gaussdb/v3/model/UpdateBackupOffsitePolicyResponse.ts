
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBackupOffsitePolicyResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateBackupOffsitePolicyResponse {
        this['result'] = result;
        return this;
    }
}