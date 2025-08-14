import { PasswordPolicyDto } from './PasswordPolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DescribePasswordPolicyResponse extends SdkResponse {
    private 'password_policy'?: PasswordPolicyDto;
    public constructor() { 
        super();
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyDto): DescribePasswordPolicyResponse {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicyDto  | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy(): PasswordPolicyDto | undefined {
        return this['password_policy'];
    }
}