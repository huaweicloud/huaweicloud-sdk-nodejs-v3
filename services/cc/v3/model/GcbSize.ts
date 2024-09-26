

export class GcbSize {
    public size?: number;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): GcbSize {
        this['size'] = size;
        return this;
    }
}