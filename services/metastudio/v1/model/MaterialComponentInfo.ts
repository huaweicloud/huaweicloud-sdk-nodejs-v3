

export class MaterialComponentInfo {
    private 'component_name'?: string;
    private 'component_type'?: MaterialComponentInfoComponentTypeEnum | string;
    private 'component_desc'?: string;
    public constructor(componentName?: string, componentType?: string) { 
        this['component_name'] = componentName;
        this['component_type'] = componentType;
    }
    public withComponentName(componentName: string): MaterialComponentInfo {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withComponentType(componentType: MaterialComponentInfoComponentTypeEnum | string): MaterialComponentInfo {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: MaterialComponentInfoComponentTypeEnum | string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): MaterialComponentInfoComponentTypeEnum | string | undefined {
        return this['component_type'];
    }
    public withComponentDesc(componentDesc: string): MaterialComponentInfo {
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

/**
    * @export
    * @enum {string}
    */
export enum MaterialComponentInfoComponentTypeEnum {
    CLOTHES = 'CLOTHES',
    PANTS = 'PANTS',
    SHOES = 'SHOES',
    HAIR = 'HAIR',
    EYELASH = 'EYELASH',
    EYEBROW = 'EYEBROW'
}
