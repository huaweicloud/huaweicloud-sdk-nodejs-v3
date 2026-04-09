import { CreateUserRelatedLogicDbV3 } from './CreateUserRelatedLogicDbV3';


export class CreateUserRequestV3 {
    public name?: string;
    public password?: string;
    private 'base_authority'?: Array<CreateUserRequestV3BaseAuthorityEnum> | Array<string>;
    public description?: string;
    private 'password_lifetime'?: number;
    public databases?: Array<CreateUserRelatedLogicDbV3>;
    public constructor(name?: string, password?: string, baseAuthority?: Array<string>) { 
        this['name'] = name;
        this['password'] = password;
        this['base_authority'] = baseAuthority;
    }
    public withName(name: string): CreateUserRequestV3 {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): CreateUserRequestV3 {
        this['password'] = password;
        return this;
    }
    public withBaseAuthority(baseAuthority: Array<CreateUserRequestV3BaseAuthorityEnum> | Array<string>): CreateUserRequestV3 {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<CreateUserRequestV3BaseAuthorityEnum> | Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<CreateUserRequestV3BaseAuthorityEnum> | Array<string> | undefined {
        return this['base_authority'];
    }
    public withDescription(description: string): CreateUserRequestV3 {
        this['description'] = description;
        return this;
    }
    public withPasswordLifetime(passwordLifetime: number): CreateUserRequestV3 {
        this['password_lifetime'] = passwordLifetime;
        return this;
    }
    public set passwordLifetime(passwordLifetime: number  | undefined) {
        this['password_lifetime'] = passwordLifetime;
    }
    public get passwordLifetime(): number | undefined {
        return this['password_lifetime'];
    }
    public withDatabases(databases: Array<CreateUserRelatedLogicDbV3>): CreateUserRequestV3 {
        this['databases'] = databases;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserRequestV3BaseAuthorityEnum {
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    INSERT = 'INSERT',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT'
}
