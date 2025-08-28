import { CreateUsersDatabases } from './CreateUsersDatabases';


export class CreateUsersInfo {
    public name?: string;
    public password?: string;
    private 'base_authority'?: Array<CreateUsersInfoBaseAuthorityEnum> | Array<string>;
    public description?: string;
    public databases?: Array<CreateUsersDatabases>;
    public constructor(name?: string, password?: string, baseAuthority?: Array<string>) { 
        this['name'] = name;
        this['password'] = password;
        this['base_authority'] = baseAuthority;
    }
    public withName(name: string): CreateUsersInfo {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): CreateUsersInfo {
        this['password'] = password;
        return this;
    }
    public withBaseAuthority(baseAuthority: Array<CreateUsersInfoBaseAuthorityEnum> | Array<string>): CreateUsersInfo {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<CreateUsersInfoBaseAuthorityEnum> | Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<CreateUsersInfoBaseAuthorityEnum> | Array<string> | undefined {
        return this['base_authority'];
    }
    public withDescription(description: string): CreateUsersInfo {
        this['description'] = description;
        return this;
    }
    public withDatabases(databases: Array<CreateUsersDatabases>): CreateUsersInfo {
        this['databases'] = databases;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUsersInfoBaseAuthorityEnum {
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    INSERT = 'INSERT',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT'
}
