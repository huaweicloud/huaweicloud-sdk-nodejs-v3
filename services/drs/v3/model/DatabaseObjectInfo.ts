

export class DatabaseObjectInfo {
    public id?: string;
    private 'parent_id'?: string | undefined;
    public type?: string;
    public name?: string;
    private 'alias_name'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): DatabaseObjectInfo {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): DatabaseObjectInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withType(type: string): DatabaseObjectInfo {
        this['type'] = type;
        return this;
    }
    public withName(name: string): DatabaseObjectInfo {
        this['name'] = name;
        return this;
    }
    public withAliasName(aliasName: string): DatabaseObjectInfo {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName() {
        return this['alias_name'];
    }
}