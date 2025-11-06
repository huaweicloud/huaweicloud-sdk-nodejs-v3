
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnlockRepositoryResponse extends SdkResponse {
    public locked?: UnlockRepositoryResponseLockedEnum | string;
    public constructor() { 
        super();
    }
    public withLocked(locked: UnlockRepositoryResponseLockedEnum | string): UnlockRepositoryResponse {
        this['locked'] = locked;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnlockRepositoryResponseLockedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
