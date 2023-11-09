

export class RuntimeTypeView {
    private 'type_name'?: string;
    private 'display_name'?: string;
    private 'container_default_port'?: number;
    private 'type_desc'?: string;
    public constructor() { 
    }
    public withTypeName(typeName: string): RuntimeTypeView {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withDisplayName(displayName: string): RuntimeTypeView {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withContainerDefaultPort(containerDefaultPort: number): RuntimeTypeView {
        this['container_default_port'] = containerDefaultPort;
        return this;
    }
    public set containerDefaultPort(containerDefaultPort: number  | undefined) {
        this['container_default_port'] = containerDefaultPort;
    }
    public get containerDefaultPort(): number | undefined {
        return this['container_default_port'];
    }
    public withTypeDesc(typeDesc: string): RuntimeTypeView {
        this['type_desc'] = typeDesc;
        return this;
    }
    public set typeDesc(typeDesc: string  | undefined) {
        this['type_desc'] = typeDesc;
    }
    public get typeDesc(): string | undefined {
        return this['type_desc'];
    }
}