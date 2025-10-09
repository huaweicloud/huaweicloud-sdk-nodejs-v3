import { UserLastLogin } from './UserLastLogin';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserLastLoginV5Response extends SdkResponse {
    private 'user_last_login'?: UserLastLogin;
    public constructor() { 
        super();
    }
    public withUserLastLogin(userLastLogin: UserLastLogin): ShowUserLastLoginV5Response {
        this['user_last_login'] = userLastLogin;
        return this;
    }
    public set userLastLogin(userLastLogin: UserLastLogin  | undefined) {
        this['user_last_login'] = userLastLogin;
    }
    public get userLastLogin(): UserLastLogin | undefined {
        return this['user_last_login'];
    }
}