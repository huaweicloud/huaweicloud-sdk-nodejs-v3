

export class AdditionalProperties {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): AdditionalProperties {
        this['type'] = type;
        return this;
    }
}