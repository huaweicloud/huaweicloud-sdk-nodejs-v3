

export class ComponentAmbV11 {
    private 'component_name': string | undefined;
    public constructor(componentName?: any) { 
        this['component_name'] = componentName;
    }
    public withComponentName(componentName: string): ComponentAmbV11 {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName() {
        return this['component_name'];
    }
}