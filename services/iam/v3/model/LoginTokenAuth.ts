import { LoginTokenSecurityToken } from './LoginTokenSecurityToken';


export class LoginTokenAuth {
    public securitytoken?: LoginTokenSecurityToken;
    public constructor(securitytoken?: LoginTokenSecurityToken) { 
        this['securitytoken'] = securitytoken;
    }
    public withSecuritytoken(securitytoken: LoginTokenSecurityToken): LoginTokenAuth {
        this['securitytoken'] = securitytoken;
        return this;
    }
}