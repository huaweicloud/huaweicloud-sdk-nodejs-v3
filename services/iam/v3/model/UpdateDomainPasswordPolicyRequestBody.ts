import { PasswordPolicyOption } from './PasswordPolicyOption';


export class UpdateDomainPasswordPolicyRequestBody {
    private 'password_policy': PasswordPolicyOption | undefined;
    public constructor(passwordPolicy?: any) { 
        this['password_policy'] = passwordPolicy;
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyOption): UpdateDomainPasswordPolicyRequestBody {
        this['password_policy'] = passwordPolicy;
        return this;
    }
    public set passwordPolicy(passwordPolicy: PasswordPolicyOption | undefined) {
        this['password_policy'] = passwordPolicy;
    }
    public get passwordPolicy() {
        return this['password_policy'];
    }
}