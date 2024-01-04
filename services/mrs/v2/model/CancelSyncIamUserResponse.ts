
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelSyncIamUserResponse extends SdkResponse {
    public state?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): CancelSyncIamUserResponse {
        this['state'] = state;
        return this;
    }
}