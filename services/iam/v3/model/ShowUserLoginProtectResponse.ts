import { LoginProtectResult } from './LoginProtectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserLoginProtectResponse extends SdkResponse {
    private 'login_protect'?: LoginProtectResult | undefined;
    public constructor() { 
        super();
    }
    public withLoginProtect(loginProtect: LoginProtectResult): ShowUserLoginProtectResponse {
        this['login_protect'] = loginProtect;
        return this;
    }
    public set loginProtect(loginProtect: LoginProtectResult | undefined) {
        this['login_protect'] = loginProtect;
    }
    public get loginProtect() {
        return this['login_protect'];
    }
}