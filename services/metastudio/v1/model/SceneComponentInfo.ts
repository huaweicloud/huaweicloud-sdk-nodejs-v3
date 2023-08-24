

export class SceneComponentInfo {
    public index?: number;
    private 'component_name'?: string;
    private 'component_type'?: SceneComponentInfoComponentTypeEnum | string;
    private 'component_desc'?: string;
    public constructor(componentName?: string, componentType?: string) { 
        this['component_name'] = componentName;
        this['component_type'] = componentType;
    }
    public withIndex(index: number): SceneComponentInfo {
        this['index'] = index;
        return this;
    }
    public withComponentName(componentName: string): SceneComponentInfo {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withComponentType(componentType: SceneComponentInfoComponentTypeEnum | string): SceneComponentInfo {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: SceneComponentInfoComponentTypeEnum | string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): SceneComponentInfoComponentTypeEnum | string | undefined {
        return this['component_type'];
    }
    public withComponentDesc(componentDesc: string): SceneComponentInfo {
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
export enum SceneComponentInfoComponentTypeEnum {
    CAMERA = 'CAMERA',
    PANEL = 'PANEL',
    LIGHT = 'LIGHT'
}
