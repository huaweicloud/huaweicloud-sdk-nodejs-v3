import { Grant } from './Grant';
import { Revoke } from './Revoke';


export class DatabasePermissionReq {
    public type: string;
    private 'is_grant': boolean | undefined;
    private 'grant_list'?: Array<Grant> | undefined;
    private 'revoke_list'?: Array<Revoke> | undefined;
    private 'role_list': Array<string> | undefined;
    private 'object_list': object | undefined;
    public cascade?: boolean;
    public database: string;
    public schema?: string;
    public table?: string;
    public constructor(type?: any, isGrant?: any, roleList?: any, objectList?: any, database?: any) { 
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
    public set isGrant(isGrant: boolean | undefined) {
        this['is_grant'] = isGrant;
    }
    public get isGrant() {
        return this['is_grant'];
    }
    public withGrantList(grantList: Array<Grant>): DatabasePermissionReq {
        this['grant_list'] = grantList;
        return this;
    }
    public set grantList(grantList: Array<Grant> | undefined) {
        this['grant_list'] = grantList;
    }
    public get grantList() {
        return this['grant_list'];
    }
    public withRevokeList(revokeList: Array<Revoke>): DatabasePermissionReq {
        this['revoke_list'] = revokeList;
        return this;
    }
    public set revokeList(revokeList: Array<Revoke> | undefined) {
        this['revoke_list'] = revokeList;
    }
    public get revokeList() {
        return this['revoke_list'];
    }
    public withRoleList(roleList: Array<string>): DatabasePermissionReq {
        this['role_list'] = roleList;
        return this;
    }
    public set roleList(roleList: Array<string> | undefined) {
        this['role_list'] = roleList;
    }
    public get roleList() {
        return this['role_list'];
    }
    public withObjectList(objectList: object): DatabasePermissionReq {
        this['object_list'] = objectList;
        return this;
    }
    public set objectList(objectList: object | undefined) {
        this['object_list'] = objectList;
    }
    public get objectList() {
        return this['object_list'];
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