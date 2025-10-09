import { LoginProfile } from './LoginProfile';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLoginProfileV5Response extends SdkResponse {
    private 'login_profile'?: LoginProfile;
    public constructor() { 
        super();
    }
    public withLoginProfile(loginProfile: LoginProfile): CreateLoginProfileV5Response {
        this['login_profile'] = loginProfile;
        return this;
    }
    public set loginProfile(loginProfile: LoginProfile  | undefined) {
        this['login_profile'] = loginProfile;
    }
    public get loginProfile(): LoginProfile | undefined {
        return this['login_profile'];
    }
}