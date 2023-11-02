

export class Connection {
    public guid?: string;
    private 'display_text'?: string;
    private 'type_name'?: string;
    private 'connection_type'?: string;
    private 'qualified_name'?: string;
    public constructor() { 
    }
    public withGuid(guid: string): Connection {
        this['guid'] = guid;
        return this;
    }
    public withDisplayText(displayText: string): Connection {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withTypeName(typeName: string): Connection {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withConnectionType(connectionType: string): Connection {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): string | undefined {
        return this['connection_type'];
    }
    public withQualifiedName(qualifiedName: string): Connection {
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