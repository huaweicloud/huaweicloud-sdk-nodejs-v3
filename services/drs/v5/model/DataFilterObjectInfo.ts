

export class DataFilterObjectInfo {
    public id?: string;
    private 'parent_id'?: string;
    private 'object_name'?: string;
    private 'object_alias_name'?: string;
    private 'object_type'?: string;
    public constructor(id?: string, parentId?: string, objectName?: string) { 
        this['id'] = id;
        this['parent_id'] = parentId;
        this['object_name'] = objectName;
    }
    public withId(id: string): DataFilterObjectInfo {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): DataFilterObjectInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withObjectName(objectName: string): DataFilterObjectInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectAliasName(objectAliasName: string): DataFilterObjectInfo {
        this['object_alias_name'] = objectAliasName;
        return this;
    }
    public set objectAliasName(objectAliasName: string  | undefined) {
        this['object_alias_name'] = objectAliasName;
    }
    public get objectAliasName(): string | undefined {
        return this['object_alias_name'];
    }
    public withObjectType(objectType: string): DataFilterObjectInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
}