import { AuthenticatingProxy } from './AuthenticatingProxy';


export class Authentication {
    public authenticatingProxy?: AuthenticatingProxy;
    public mode?: string;
    public constructor() { 
    }
    public withAuthenticatingProxy(authenticatingProxy: AuthenticatingProxy): Authentication {
        this['authenticatingProxy'] = authenticatingProxy;
        return this;
    }
    public withMode(mode: string): Authentication {
        this['mode'] = mode;
        return this;
    }
}