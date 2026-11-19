
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplicaBinlogReadConfigResponse extends SdkResponse {
    public supported?: boolean;
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withSupported(supported: boolean): ShowReplicaBinlogReadConfigResponse {
        this['supported'] = supported;
        return this;
    }
    public withEnabled(enabled: boolean): ShowReplicaBinlogReadConfigResponse {
        this['enabled'] = enabled;
        return this;
    }
}