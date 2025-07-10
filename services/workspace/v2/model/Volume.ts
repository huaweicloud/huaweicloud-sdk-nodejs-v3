

export class Volume {
    public type?: string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): Volume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Volume {
        this['size'] = size;
        return this;
    }
}