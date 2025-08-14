import { PasswordPolicyDto } from './PasswordPolicyDto';


export class UpdatePasswordPolicyReqBody {
    private 'password_policy'?: PasswordPolicyDto;
    public constructor(passwordPolicy?: PasswordPolicyDto) { 
        this['password_policy'] = passwordPolicy;
    }
    public withPasswordPolicy(passwordPolicy: PasswordPolicyDto): UpdatePasswordPolicyReqBody {
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