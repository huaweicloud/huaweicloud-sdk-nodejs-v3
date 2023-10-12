

export class UpdateTrafficMirrorFilterOption {
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateTrafficMirrorFilterOption {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdateTrafficMirrorFilterOption {
        this['name'] = name;
        return this;
    }
}