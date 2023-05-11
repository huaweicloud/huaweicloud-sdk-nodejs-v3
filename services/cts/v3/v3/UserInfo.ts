import { BaseUser } from './BaseUser';


export class UserInfo {
    public id?: string;
    public name?: string;
    public domain?: BaseUser;
    public constructor() { 
    }
    public withId(id: string): UserInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserInfo {
        this['name'] = name;
        return this;
    }
    public withDomain(domain: BaseUser): UserInfo {
        this['domain'] = domain;
        return this;
    }
}