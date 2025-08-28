import { GetUsersListdatabase } from './GetUsersListdatabase';


export class GetUsersListDetailResponses {
    public name?: string;
    public status?: string;
    private 'base_authority'?: Array<string>;
    private 'password_last_changed'?: number;
    private 'extend_authority'?: Array<string>;
    public description?: string;
    public created?: number;
    public databases?: Array<GetUsersListdatabase>;
    public constructor(name?: string, status?: string, baseAuthority?: Array<string>, description?: string, created?: number, databases?: Array<GetUsersListdatabase>) { 
        this['name'] = name;
        this['status'] = status;
        this['base_authority'] = baseAuthority;
        this['description'] = description;
        this['created'] = created;
        this['databases'] = databases;
    }
    public withName(name: string): GetUsersListDetailResponses {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): GetUsersListDetailResponses {
        this['status'] = status;
        return this;
    }
    public withBaseAuthority(baseAuthority: Array<string>): GetUsersListDetailResponses {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<string> | undefined {
        return this['base_authority'];
    }
    public withPasswordLastChanged(passwordLastChanged: number): GetUsersListDetailResponses {
        this['password_last_changed'] = passwordLastChanged;
        return this;
    }
    public set passwordLastChanged(passwordLastChanged: number  | undefined) {
        this['password_last_changed'] = passwordLastChanged;
    }
    public get passwordLastChanged(): number | undefined {
        return this['password_last_changed'];
    }
    public withExtendAuthority(extendAuthority: Array<string>): GetUsersListDetailResponses {
        this['extend_authority'] = extendAuthority;
        return this;
    }
    public set extendAuthority(extendAuthority: Array<string>  | undefined) {
        this['extend_authority'] = extendAuthority;
    }
    public get extendAuthority(): Array<string> | undefined {
        return this['extend_authority'];
    }
    public withDescription(description: string): GetUsersListDetailResponses {
        this['description'] = description;
        return this;
    }
    public withCreated(created: number): GetUsersListDetailResponses {
        this['created'] = created;
        return this;
    }
    public withDatabases(databases: Array<GetUsersListdatabase>): GetUsersListDetailResponses {
        this['databases'] = databases;
        return this;
    }
}