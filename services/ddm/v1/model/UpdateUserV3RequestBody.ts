import { UpdateUserRelatedLogicDbV3 } from './UpdateUserRelatedLogicDbV3';


export class UpdateUserV3RequestBody {
    private 'base_authority'?: Array<UpdateUserV3RequestBodyBaseAuthorityEnum> | Array<string>;
    public description?: string;
    private 'password_lifetime'?: number;
    public databases?: Array<UpdateUserRelatedLogicDbV3>;
    public constructor() { 
    }
    public withBaseAuthority(baseAuthority: Array<UpdateUserV3RequestBodyBaseAuthorityEnum> | Array<string>): UpdateUserV3RequestBody {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<UpdateUserV3RequestBodyBaseAuthorityEnum> | Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<UpdateUserV3RequestBodyBaseAuthorityEnum> | Array<string> | undefined {
        return this['base_authority'];
    }
    public withDescription(description: string): UpdateUserV3RequestBody {
        this['description'] = description;
        return this;
    }
    public withPasswordLifetime(passwordLifetime: number): UpdateUserV3RequestBody {
        this['password_lifetime'] = passwordLifetime;
        return this;
    }
    public set passwordLifetime(passwordLifetime: number  | undefined) {
        this['password_lifetime'] = passwordLifetime;
    }
    public get passwordLifetime(): number | undefined {
        return this['password_lifetime'];
    }
    public withDatabases(databases: Array<UpdateUserRelatedLogicDbV3>): UpdateUserV3RequestBody {
        this['databases'] = databases;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserV3RequestBodyBaseAuthorityEnum {
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    INSERT = 'INSERT',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT'
}
