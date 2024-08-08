

export class Flavor {
    public type?: string;
    public size?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): Flavor {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Flavor {
        this['size'] = size;
        return this;
    }
}