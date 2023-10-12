

export class CreateTrafficMirrorFilterOption {
    public description?: string;
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDescription(description: string): CreateTrafficMirrorFilterOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): CreateTrafficMirrorFilterOption {
        this['name'] = name;
        return this;
    }
}