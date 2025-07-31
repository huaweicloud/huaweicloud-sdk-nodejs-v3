
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SyncClusterProtectionEventResponse extends SdkResponse {
    public synched?: boolean;
    public constructor() { 
        super();
    }
    public withSynched(synched: boolean): SyncClusterProtectionEventResponse {
        this['synched'] = synched;
        return this;
    }
}