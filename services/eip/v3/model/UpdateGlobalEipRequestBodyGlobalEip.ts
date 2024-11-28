

export class UpdateGlobalEipRequestBodyGlobalEip {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateGlobalEipRequestBodyGlobalEip {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGlobalEipRequestBodyGlobalEip {
        this['description'] = description;
        return this;
    }
}