import { DatabaseObject } from './DatabaseObject';
import { TargetRootDb } from './TargetRootDb';


export class DbObject {
    private 'object_scope'?: DbObjectObjectScopeEnum | string;
    private 'target_root_db'?: TargetRootDb;
    private 'object_info'?: { [key: string]: DatabaseObject; };
    public constructor(objectScope?: string) { 
        this['object_scope'] = objectScope;
    }
    public withObjectScope(objectScope: DbObjectObjectScopeEnum | string): DbObject {
        this['object_scope'] = objectScope;
        return this;
    }
    public set objectScope(objectScope: DbObjectObjectScopeEnum | string  | undefined) {
        this['object_scope'] = objectScope;
    }
    public get objectScope(): DbObjectObjectScopeEnum | string | undefined {
        return this['object_scope'];
    }
    public withTargetRootDb(targetRootDb: TargetRootDb): DbObject {
        this['target_root_db'] = targetRootDb;
        return this;
    }
    public set targetRootDb(targetRootDb: TargetRootDb  | undefined) {
        this['target_root_db'] = targetRootDb;
    }
    public get targetRootDb(): TargetRootDb | undefined {
        return this['target_root_db'];
    }
    public withObjectInfo(objectInfo: { [key: string]: DatabaseObject; }): DbObject {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: { [key: string]: DatabaseObject; }  | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo(): { [key: string]: DatabaseObject; } | undefined {
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
