import { PasswordPolicyResult } from './PasswordPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainPasswordPolicyResponse extends SdkResponse {
    private 'password_policy'?: PasswordPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyResult): ShowDomainPasswordPolicyResponse {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicyResult | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy() {
        return this['password_policy'];
    }
}