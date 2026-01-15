

export class CheckEdgeSiteResourcesVolume {
    public type?: string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): CheckEdgeSiteResourcesVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): CheckEdgeSiteResourcesVolume {
        this['size'] = size;
        return this;
    }
}