import { AuthInfo } from './AuthInfo';


export class NamedAuthInfo {
    public name?: string;
    public user?: AuthInfo;
    public constructor() { 
    }
    public withName(name: string): NamedAuthInfo {
        this['name'] = name;
        return this;
    }
    public withUser(user: AuthInfo): NamedAuthInfo {
        this['user'] = user;
        return this;
    }
}