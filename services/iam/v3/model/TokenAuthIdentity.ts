import { IdentityToken } from './IdentityToken';
import { ServicePolicy } from './ServicePolicy';


export class TokenAuthIdentity {
    public methods?: Array<TokenAuthIdentityMethodsEnum> | Array<string>;
    public token?: IdentityToken;
    public policy?: ServicePolicy;
    public constructor(methods?: Array<string>) { 
        this['methods'] = methods;
    }
    public withMethods(methods: Array<TokenAuthIdentityMethodsEnum> | Array<string>): TokenAuthIdentity {
        this['methods'] = methods;
        return this;
    }
    public withToken(token: IdentityToken): TokenAuthIdentity {
        this['token'] = token;
        return this;
    }
    public withPolicy(policy: ServicePolicy): TokenAuthIdentity {
        this['policy'] = policy;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TokenAuthIdentityMethodsEnum {
    TOKEN = 'token'
}
