import { PasswordPolicyResult } from './PasswordPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainPasswordPolicyResponse extends SdkResponse {
    private 'password_policy'?: PasswordPolicyResult;
    public constructor() { 
        super();
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyResult): UpdateDomainPasswordPolicyResponse {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicyResult  | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy(): PasswordPolicyResult | undefined {
        return this['password_policy'];
    }
}