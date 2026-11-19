
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExceptionSnapshotStatusResponse extends SdkResponse {
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowExceptionSnapshotStatusResponse {
        this['enabled'] = enabled;
        return this;
    }
}