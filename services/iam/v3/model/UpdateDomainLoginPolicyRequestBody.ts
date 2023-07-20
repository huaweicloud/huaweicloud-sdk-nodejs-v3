import { LoginPolicyOption } from './LoginPolicyOption';


export class UpdateDomainLoginPolicyRequestBody {
    private 'login_policy'?: LoginPolicyOption;
    public constructor(loginPolicy?: LoginPolicyOption) { 
        this['login_policy'] = loginPolicy;
    }
    public withLoginPolicy(loginPolicy: LoginPolicyOption): UpdateDomainLoginPolicyRequestBody {
        this['login_policy'] = loginPolicy;
        return this;
    }
    public set loginPolicy(loginPolicy: LoginPolicyOption  | undefined) {
        this['login_policy'] = loginPolicy;
    }
    public get loginPolicy(): LoginPolicyOption | undefined {
        return this['login_policy'];
    }
}