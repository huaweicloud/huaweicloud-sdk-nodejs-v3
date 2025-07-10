
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnlockRepositoryResponse extends SdkResponse {
    public locked?: string;
    public constructor() { 
        super();
    }
    public withLocked(locked: string): UnlockRepositoryResponse {
        this['locked'] = locked;
        return this;
    }
}