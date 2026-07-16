

export class DiskResponse {
    public size?: number;
    public unit?: string;
    public constructor() { 
    }
    public withSize(size: number): DiskResponse {
        this['size'] = size;
        return this;
    }
    public withUnit(unit: string): DiskResponse {
        this['unit'] = unit;
        return this;
    }
}