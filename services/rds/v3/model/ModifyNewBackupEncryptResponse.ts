
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyNewBackupEncryptResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ModifyNewBackupEncryptResponse {
        this['result'] = result;
        return this;
    }
}