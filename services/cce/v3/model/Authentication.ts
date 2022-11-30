import { AuthenticatingProxy } from './AuthenticatingProxy';


export class Authentication {
    public mode?: string;
    public authenticatingProxy?: AuthenticatingProxy;
    public constructor() { 
    }
    public withMode(mode: string): Authentication {
        this['mode'] = mode;
        return this;
    }
    public withAuthenticatingProxy(authenticatingProxy: AuthenticatingProxy): Authentication {
        this['authenticatingProxy'] = authenticatingProxy;
        return this;
    }
}