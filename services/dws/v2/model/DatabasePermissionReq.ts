import { Grant } from './Grant';
import { Revoke } from './Revoke';


export class DatabasePermissionReq {
    public type?: string;
    private 'is_grant'?: boolean;
    private 'grant_list'?: Array<Grant>;
    private 'revoke_list'?: Array<Revoke>;
    private 'role_list'?: Array<string>;
    private 'object_list'?: object;
    private 'all_object'?: boolean;
    public cascade?: boolean;
    public database?: string;
    public schema?: string;
    public table?: string;
    public constructor(type?: string, isGrant?: boolean, roleList?: Array<string>, objectList?: object, database?: string) { 
        this['type'] = type;
        this['is_grant'] = isGrant;
        this['role_list'] = roleList;
        this['object_list'] = objectList;
        this['database'] = database;
    }
    public withType(type: string): DatabasePermissionReq {
        this['type'] = type;
        return this;
    }
    public withIsGrant(isGrant: boolean): DatabasePermissionReq {
        this['is_grant'] = isGrant;
        return this;
    }
    public set isGrant(isGrant: boolean  | undefined) {
        this['is_grant'] = isGrant;
    }
    public get isGrant(): boolean | undefined {
        return this['is_grant'];
    }
    public withGrantList(grantList: Array<Grant>): DatabasePermissionReq {
        this['grant_list'] = grantList;
        return this;
    }
    public set grantList(grantList: Array<Grant>  | undefined) {
        this['grant_list'] = grantList;
    }
    public get grantList(): Array<Grant> | undefined {
        return this['grant_list'];
    }
    public withRevokeList(revokeList: Array<Revoke>): DatabasePermissionReq {
        this['revoke_list'] = revokeList;
        return this;
    }
    public set revokeList(revokeList: Array<Revoke>  | undefined) {
        this['revoke_list'] = revokeList;
    }
    public get revokeList(): Array<Revoke> | undefined {
        return this['revoke_list'];
    }
    public withRoleList(roleList: Array<string>): DatabasePermissionReq {
        this['role_list'] = roleList;
        return this;
    }
    public set roleList(roleList: Array<string>  | undefined) {
        this['role_list'] = roleList;
    }
    public get roleList(): Array<string> | undefined {
        return this['role_list'];
    }
    public withObjectList(objectList: object): DatabasePermissionReq {
        this['object_list'] = objectList;
        return this;
    }
    public set objectList(objectList: object  | undefined) {
        this['object_list'] = objectList;
    }
    public get objectList(): object | undefined {
        return this['object_list'];
    }
    public withAllObject(allObject: boolean): DatabasePermissionReq {
        this['all_object'] = allObject;
        return this;
    }
    public set allObject(allObject: boolean  | undefined) {
        this['all_object'] = allObject;
    }
    public get allObject(): boolean | undefined {
        return this['all_object'];
    }
    public withCascade(cascade: boolean): DatabasePermissionReq {
        this['cascade'] = cascade;
        return this;
    }
    public withDatabase(database: string): DatabasePermissionReq {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): DatabasePermissionReq {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): DatabasePermissionReq {
        this['table'] = table;
        return this;
    }
}