import { LoginTokenSecurityToken } from './LoginTokenSecurityToken';


export class LoginTokenAuth {
    public securitytoken: LoginTokenSecurityToken;
    public constructor(securitytoken: any) { 
        this['securitytoken'] = securitytoken;
    }
    public withSecuritytoken(securitytoken: LoginTokenSecurityToken): LoginTokenAuth {
        this['securitytoken'] = securitytoken;
        return this;
    }
}