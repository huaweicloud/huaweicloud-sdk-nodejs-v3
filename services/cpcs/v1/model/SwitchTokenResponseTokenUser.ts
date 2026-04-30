import { SwitchTokenResponseTokenUserDomain } from './SwitchTokenResponseTokenUserDomain';


export class SwitchTokenResponseTokenUser {
    public domain?: SwitchTokenResponseTokenUserDomain;
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withDomain(domain: SwitchTokenResponseTokenUserDomain): SwitchTokenResponseTokenUser {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): SwitchTokenResponseTokenUser {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SwitchTokenResponseTokenUser {
        this['id'] = id;
        return this;
    }
}