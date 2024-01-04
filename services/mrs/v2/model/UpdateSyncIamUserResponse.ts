
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSyncIamUserResponse extends SdkResponse {
    public state?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): UpdateSyncIamUserResponse {
        this['state'] = state;
        return this;
    }
}