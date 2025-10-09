import { PasswordPolicy } from './PasswordPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPasswordPolicyV5Response extends SdkResponse {
    private 'password_policy'?: PasswordPolicy;
    public constructor() { 
        super();
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicy): ShowPasswordPolicyV5Response {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicy  | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy(): PasswordPolicy | undefined {
        return this['password_policy'];
    }
}