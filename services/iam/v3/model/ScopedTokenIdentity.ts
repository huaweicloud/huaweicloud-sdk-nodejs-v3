import { ScopedToken } from './ScopedToken';


export class ScopedTokenIdentity {
    public methods?: Array<string>;
    public token?: ScopedToken;
    public constructor(methods?: Array<string>, token?: ScopedToken) { 
        this['methods'] = methods;
        this['token'] = token;
    }
    public withMethods(methods: Array<string>): ScopedTokenIdentity {
        this['methods'] = methods;
        return this;
    }
    public withToken(token: ScopedToken): ScopedTokenIdentity {
        this['token'] = token;
        return this;
    }
}