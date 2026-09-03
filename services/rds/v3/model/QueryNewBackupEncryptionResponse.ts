
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class QueryNewBackupEncryptionResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): QueryNewBackupEncryptionResponse {
        this['enabled'] = enabled;
        return this;
    }
}