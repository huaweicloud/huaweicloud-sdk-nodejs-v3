

export class ReduceVolumeObject {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): ReduceVolumeObject {
        this['size'] = size;
        return this;
    }
}