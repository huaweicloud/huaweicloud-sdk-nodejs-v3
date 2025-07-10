
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LockRepositoryResponse extends SdkResponse {
    public locked?: string;
    public constructor() { 
        super();
    }
    public withLocked(locked: string): LockRepositoryResponse {
        this['locked'] = locked;
        return this;
    }
}