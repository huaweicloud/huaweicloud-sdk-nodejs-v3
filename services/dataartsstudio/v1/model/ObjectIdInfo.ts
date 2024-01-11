

export class ObjectIdInfo {
    public name?: string;
    private 'type_name'?: string;
    private 'qualified_name'?: string;
    public constructor() { 
    }
    public withName(name: string): ObjectIdInfo {
        this['name'] = name;
        return this;
    }
    public withTypeName(typeName: string): ObjectIdInfo {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withQualifiedName(qualifiedName: string): ObjectIdInfo {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
}