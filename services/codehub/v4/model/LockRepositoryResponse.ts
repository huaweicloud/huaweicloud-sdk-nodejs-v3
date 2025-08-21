
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LockRepositoryResponse extends SdkResponse {
    public locked?: LockRepositoryResponseLockedEnum | string;
    public constructor() { 
        super();
    }
    public withLocked(locked: LockRepositoryResponseLockedEnum | string): LockRepositoryResponse {
        this['locked'] = locked;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LockRepositoryResponseLockedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
