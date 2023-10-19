

export class RebootType {
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): RebootType {
        this['type'] = type;
        return this;
    }
}