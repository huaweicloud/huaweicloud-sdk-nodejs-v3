

export class CompatibleInstanceVolumeResp {
    public type?: string;
    public used?: number;
    public size?: number;
    public constructor() { 
    }
    public withType(type: string): CompatibleInstanceVolumeResp {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): CompatibleInstanceVolumeResp {
        this['used'] = used;
        return this;
    }
    public withSize(size: number): CompatibleInstanceVolumeResp {
        this['size'] = size;
        return this;
    }
}