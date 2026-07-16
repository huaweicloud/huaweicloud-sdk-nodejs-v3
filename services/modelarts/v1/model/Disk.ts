

export class Disk {
    public size?: string;
    public unit?: string;
    public constructor() { 
    }
    public withSize(size: string): Disk {
        this['size'] = size;
        return this;
    }
    public withUnit(unit: string): Disk {
        this['unit'] = unit;
        return this;
    }
}