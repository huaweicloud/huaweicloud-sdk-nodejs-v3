import { LoginPolicyOption } from './LoginPolicyOption';


export class UpdateDomainLoginPolicyRequestBody {
    private 'login_policy': LoginPolicyOption | undefined;
    public constructor(loginPolicy?: any) { 
        this['login_policy'] = loginPolicy;
    }
    public withLoginPolicy(loginPolicy: LoginPolicyOption): UpdateDomainLoginPolicyRequestBody {
        this['login_policy'] = loginPolicy;
        return this;
    }
    public set loginPolicy(loginPolicy: LoginPolicyOption | undefined) {
        this['login_policy'] = loginPolicy;
    }
    public get loginPolicy() {
        return this['login_policy'];
    }
}