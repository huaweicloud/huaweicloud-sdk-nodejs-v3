

export class DatabaseInfo {
    public id?: string;
    private 'parent_id'?: string | undefined;
    private 'object_type'?: DatabaseInfoObjectTypeEnum | undefined;
    private 'object_name'?: string | undefined;
    private 'object_alias_name'?: string | undefined;
    public select?: string;
    public constructor() { 
    }
    public withId(id: string): DatabaseInfo {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): DatabaseInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withObjectType(objectType: DatabaseInfoObjectTypeEnum): DatabaseInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: DatabaseInfoObjectTypeEnum | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType() {
        return this['object_type'];
    }
    public withObjectName(objectName: string): DatabaseInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName() {
        return this['object_name'];
    }
    public withObjectAliasName(objectAliasName: string): DatabaseInfo {
        this['object_alias_name'] = objectAliasName;
        return this;
    }
    public set objectAliasName(objectAliasName: string | undefined) {
        this['object_alias_name'] = objectAliasName;
    }
    public get objectAliasName() {
        return this['object_alias_name'];
    }
    public withSelect(select: string): DatabaseInfo {
        this['select'] = select;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatabaseInfoObjectTypeEnum {
    DATABASE = 'database',
    TABLE = 'table',
    SCHEMA = 'schema',
    VIEW = 'view'
}
