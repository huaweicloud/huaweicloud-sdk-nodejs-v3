

export class AccessControl {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): AccessControl {
        this['type'] = type;
        return this;
    }
}