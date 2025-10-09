import { LoginPolicy } from './LoginPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoginPolicyV5Response extends SdkResponse {
    private 'login_policy'?: LoginPolicy;
    public constructor() { 
        super();
    }
    public withLoginPolicy(loginPolicy: LoginPolicy): ShowLoginPolicyV5Response {
        this['login_policy'] = loginPolicy;
        return this;
    }
    public set loginPolicy(loginPolicy: LoginPolicy  | undefined) {
        this['login_policy'] = loginPolicy;
    }
    public get loginPolicy(): LoginPolicy | undefined {
        return this['login_policy'];
    }
}