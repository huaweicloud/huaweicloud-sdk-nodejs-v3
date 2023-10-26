

export class AssetNameRequest {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): AssetNameRequest {
        this['name'] = name;
        return this;
    }
}