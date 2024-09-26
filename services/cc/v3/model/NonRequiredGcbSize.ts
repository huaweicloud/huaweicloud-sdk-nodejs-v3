

export class NonRequiredGcbSize {
    public size?: number;
    public constructor() { 
    }
    public withSize(size: number): NonRequiredGcbSize {
        this['size'] = size;
        return this;
    }
}