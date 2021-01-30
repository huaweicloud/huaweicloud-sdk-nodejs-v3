import { KeystoneUpdateUserByAdminResult } from './KeystoneUpdateUserByAdminResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneUpdateUserByAdminResponse extends SdkResponse {
    public user?: KeystoneUpdateUserByAdminResult;
    public constructor() { 
        super();
    }
    public withUser(user: KeystoneUpdateUserByAdminResult): KeystoneUpdateUserByAdminResponse {
        this['user'] = user;
        return this;
    }
}