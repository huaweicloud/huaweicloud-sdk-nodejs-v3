

export class ComponentUpdateRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ComponentUpdateRequest {
        this['name'] = name;
        return this;
    }
}