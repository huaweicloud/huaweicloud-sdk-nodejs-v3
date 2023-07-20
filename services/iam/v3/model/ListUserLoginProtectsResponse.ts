import { LoginProtectResult } from './LoginProtectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserLoginProtectsResponse extends SdkResponse {
    private 'login_protects'?: Array<LoginProtectResult>;
    public constructor() { 
        super();
    }
    public withLoginProtects(loginProtects: Array<LoginProtectResult>): ListUserLoginProtectsResponse {
        this['login_protects'] = loginProtects;
        return this;
    }
    public set loginProtects(loginProtects: Array<LoginProtectResult>  | undefined) {
        this['login_protects'] = loginProtects;
    }
    public get loginProtects(): Array<LoginProtectResult> | undefined {
        return this['login_protects'];
    }
}