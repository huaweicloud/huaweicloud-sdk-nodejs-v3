

export class ComponentAmb {
    public componentId?: string;
    public componentName?: string;
    public componentVersion?: string;
    public componentDesc?: string;
    public constructor() { 
    }
    public withComponentId(componentId: string): ComponentAmb {
        this['componentId'] = componentId;
        return this;
    }
    public withComponentName(componentName: string): ComponentAmb {
        this['componentName'] = componentName;
        return this;
    }
    public withComponentVersion(componentVersion: string): ComponentAmb {
        this['componentVersion'] = componentVersion;
        return this;
    }
    public withComponentDesc(componentDesc: string): ComponentAmb {
        this['componentDesc'] = componentDesc;
        return this;
    }
}