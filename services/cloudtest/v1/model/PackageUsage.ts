

export class PackageUsage {
    public name?: string;
    private 'used_percent'?: number;
    public constructor() { 
    }
    public withName(name: string): PackageUsage {
        this['name'] = name;
        return this;
    }
    public withUsedPercent(usedPercent: number): PackageUsage {
        this['used_percent'] = usedPercent;
        return this;
    }
    public set usedPercent(usedPercent: number  | undefined) {
        this['used_percent'] = usedPercent;
    }
    public get usedPercent(): number | undefined {
        return this['used_percent'];
    }
}