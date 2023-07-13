

export class AdditionalProperties {
    public type: string;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withType(type: string): AdditionalProperties {
        this['type'] = type;
        return this;
    }
}