

export class Volume {
    public size?: string;
    public used?: string;
    public constructor(size?: string, used?: string) { 
        this['size'] = size;
        this['used'] = used;
    }
    public withSize(size: string): Volume {
        this['size'] = size;
        return this;
    }
    public withUsed(used: string): Volume {
        this['used'] = used;
        return this;
    }
}