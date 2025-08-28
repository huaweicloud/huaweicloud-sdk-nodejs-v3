import { UpdateUsersDatabases } from './UpdateUsersDatabases';


export class UpdateUserDetailReq {
    private 'base_authority'?: Array<UpdateUserDetailReqBaseAuthorityEnum> | Array<string>;
    public description?: string;
    public databases?: Array<UpdateUsersDatabases>;
    public constructor() { 
    }
    public withBaseAuthority(baseAuthority: Array<UpdateUserDetailReqBaseAuthorityEnum> | Array<string>): UpdateUserDetailReq {
        this['base_authority'] = baseAuthority;
        return this;
    }
    public set baseAuthority(baseAuthority: Array<UpdateUserDetailReqBaseAuthorityEnum> | Array<string>  | undefined) {
        this['base_authority'] = baseAuthority;
    }
    public get baseAuthority(): Array<UpdateUserDetailReqBaseAuthorityEnum> | Array<string> | undefined {
        return this['base_authority'];
    }
    public withDescription(description: string): UpdateUserDetailReq {
        this['description'] = description;
        return this;
    }
    public withDatabases(databases: Array<UpdateUsersDatabases>): UpdateUserDetailReq {
        this['databases'] = databases;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateUserDetailReqBaseAuthorityEnum {
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    INSERT = 'INSERT',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT'
}
