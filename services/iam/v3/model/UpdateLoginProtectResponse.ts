import { UpdateLoginProtectRespon } from './UpdateLoginProtectRespon';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLoginProtectResponse extends SdkResponse {
    private 'login_protect'?: UpdateLoginProtectRespon;
    public constructor() { 
        super();
    }
    public withLoginProtect(loginProtect: UpdateLoginProtectRespon): UpdateLoginProtectResponse {
        this['login_protect'] = loginProtect;
        return this;
    }
    public set loginProtect(loginProtect: UpdateLoginProtectRespon  | undefined) {
        this['login_protect'] = loginProtect;
    }
    public get loginProtect(): UpdateLoginProtectRespon | undefined {
        return this['login_protect'];
    }
}