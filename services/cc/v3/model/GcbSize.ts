

export class GcbSize {
    public size?: number;
    public constructor() { 
    }
    public withSize(size: number): GcbSize {
        this['size'] = size;
        return this;
    }
}