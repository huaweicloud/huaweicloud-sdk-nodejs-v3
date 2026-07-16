

export class ResourceFlavorSpecGpu {
    public type?: string;
    public size?: string;
    public constructor() { 
    }
    public withType(type: string): ResourceFlavorSpecGpu {
        this['type'] = type;
        return this;
    }
    public withSize(size: string): ResourceFlavorSpecGpu {
        this['size'] = size;
        return this;
    }
}