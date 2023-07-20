import { PasswordPolicyOption } from './PasswordPolicyOption';


export class UpdateDomainPasswordPolicyRequestBody {
    private 'password_policy'?: PasswordPolicyOption;
    public constructor(passwordPolicy?: PasswordPolicyOption) { 
        this['password_policy'] = passwordPolicy;
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyOption): UpdateDomainPasswordPolicyRequestBody {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicyOption  | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy(): PasswordPolicyOption | undefined {
        return this['password_policy'];
    }
}