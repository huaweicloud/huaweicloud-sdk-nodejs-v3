import { Domain } from './Domain';


export class UserResponse {
    public id?: string;
    public name?: string;
    public domain?: Domain;
    public constructor() { 
    }
    public withId(id: string): UserResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserResponse {
        this['name'] = name;
        return this;
    }
    public withDomain(domain: Domain): UserResponse {
        this['domain'] = domain;
        return this;
    }
}