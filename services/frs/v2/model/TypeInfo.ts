

export class TypeInfo {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): TypeInfo {
        this['type'] = type;
        return this;
    }
}