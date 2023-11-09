

export class ComponentAffinityAppInnerParameters {
    public displayName?: string;
    public name?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): ComponentAffinityAppInnerParameters {
        this['displayName'] = displayName;
        return this;
    }
    public withName(name: string): ComponentAffinityAppInnerParameters {
        this['name'] = name;
        return this;
    }
}