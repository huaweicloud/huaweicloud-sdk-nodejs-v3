import { DatabaseObject } from './DatabaseObject';
import { TargetRootDb } from './TargetRootDb';


export class DbObject {
    private 'object_scope': DbObjectObjectScopeEnum | undefined;
    private 'target_root_db'?: TargetRootDb | undefined;
    private 'object_info'?: { [key: string]: DatabaseObject; } | undefined;
    public constructor(objectScope?: any) { 
        this['object_scope'] = objectScope;
    }
    public withObjectScope(objectScope: DbObjectObjectScopeEnum): DbObject {
        this['object_scope'] = objectScope;
        return this;
    }
    public set objectScope(objectScope: DbObjectObjectScopeEnum | undefined) {
        this['object_scope'] = objectScope;
    }
    public get objectScope() {
        return this['object_scope'];
    }
    public withTargetRootDb(targetRootDb: TargetRootDb): DbObject {
        this['target_root_db'] = targetRootDb;
        return this;
    }
    public set targetRootDb(targetRootDb: TargetRootDb | undefined) {
        this['target_root_db'] = targetRootDb;
    }
    public get targetRootDb() {
        return this['target_root_db'];
    }
    public withObjectInfo(objectInfo: { [key: string]: DatabaseObject; }): DbObject {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: { [key: string]: DatabaseObject; } | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo() {
        return this['object_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DbObjectObjectScopeEnum {
    ALL = 'all',
    DATABASE = 'database',
    TABLE = 'table'
}
