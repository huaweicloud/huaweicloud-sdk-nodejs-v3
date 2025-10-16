import { SwitchTokenResponseUserDomain } from './SwitchTokenResponseUserDomain';


export class SwitchTokenResponseUser {
    public domain?: SwitchTokenResponseUserDomain;
    public name?: string;
    public id?: string;
    public constructor() { 
    }
    public withDomain(domain: SwitchTokenResponseUserDomain): SwitchTokenResponseUser {
        this['domain'] = domain;
        return this;
    }
    public withName(name: string): SwitchTokenResponseUser {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SwitchTokenResponseUser {
        this['id'] = id;
        return this;
    }
}