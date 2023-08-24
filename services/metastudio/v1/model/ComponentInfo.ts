

export class ComponentInfo {
    private 'component_name'?: string;
    private 'component_type'?: string;
    private 'component_desc'?: string;
    public constructor(componentName?: string, componentType?: string) { 
        this['component_name'] = componentName;
        this['component_type'] = componentType;
    }
    public withComponentName(componentName: string): ComponentInfo {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withComponentType(componentType: string): ComponentInfo {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): string | undefined {
        return this['component_type'];
    }
    public withComponentDesc(componentDesc: string): ComponentInfo {
        this['component_desc'] = componentDesc;
        return this;
    }
    public set componentDesc(componentDesc: string  | undefined) {
        this['component_desc'] = componentDesc;
    }
    public get componentDesc(): string | undefined {
        return this['component_desc'];
    }
}