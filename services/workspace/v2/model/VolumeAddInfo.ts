

export class VolumeAddInfo {
    public id?: string;
    public type?: string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withId(id: string): VolumeAddInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): VolumeAddInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeAddInfo {
        this['size'] = size;
        return this;
    }
}