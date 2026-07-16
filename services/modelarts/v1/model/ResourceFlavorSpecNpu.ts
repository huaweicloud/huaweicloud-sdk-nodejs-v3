

export class ResourceFlavorSpecNpu {
    public type?: string;
    public size?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceFlavorSpecNpu {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): ResourceFlavorSpecNpu {
        this['size'] = size;
        return this;
    }
}