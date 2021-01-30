import { KeystoneCreateUserResult } from './KeystoneCreateUserResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneCreateUserResponse extends SdkResponse {
    public user?: KeystoneCreateUserResult;
    public constructor() { 
        super();
    }
    public withUser(user: KeystoneCreateUserResult): KeystoneCreateUserResponse {
        this['user'] = user;
        return this;
    }
}