import { GetUsersListdatabaseV3 } from './GetUsersListdatabaseV3';


export class GetUsersListDetailResponsesV3 {
    public name?: string;
    public status?: string;
    private 'base_authority'?: Array<string>;
    private 'password_lifetime'?: number;
    private 'password_last_changed'?: string;
    public description?: string;
    public created?: string;
    public databases?: Array<GetUsersListdatabaseV3>;
    public constructor(name?: string, status?: string, baseAuthority?: Array<string>, description?: string, created?: string, databases?: Array<GetUsersListdatabaseV3>) { 
        this['name'] = name;
        this['status'] = status;
        this['base_authority'] = baseAuthority;
        this['description'] = description;
        this['created'] = created;
        this['databases'] = databases;
    }
    public withName(name: string): GetUsersListDetailResponsesV3 {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GetUsersListDetailResponsesV3 {
        this['status'] = status;
        return this;
    }
    public withBaseAuthority(baseAuthority: Array<string>): GetUsersListDetailResponsesV3 {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<string> | undefined {
        return this['base_authority'];
    }
    public withPasswordLifetime(passwordLifetime: number): GetUsersListDetailResponsesV3 {
        this['password_lifetime'] = passwordLifetime;
        return this;
    }
    public set passwordLifetime(passwordLifetime: number  | undefined) {
        this['password_lifetime'] = passwordLifetime;
    }
    public get passwordLifetime(): number | undefined {
        return this['password_lifetime'];
    }
    public withPasswordLastChanged(passwordLastChanged: string): GetUsersListDetailResponsesV3 {
        this['password_last_changed'] = passwordLastChanged;
        return this;
    }
    public set passwordLastChanged(passwordLastChanged: string  | undefined) {
        this['password_last_changed'] = passwordLastChanged;
    }
    public get passwordLastChanged(): string | undefined {
        return this['password_last_changed'];
    }
    public withDescription(description: string): GetUsersListDetailResponsesV3 {
        this['description'] = description;
        return this;
    }
    public withCreated(created: string): GetUsersListDetailResponsesV3 {
        this['created'] = created;
        return this;
    }
    public withDatabases(databases: Array<GetUsersListdatabaseV3>): GetUsersListDetailResponsesV3 {
        this['databases'] = databases;
        return this;
    }
}