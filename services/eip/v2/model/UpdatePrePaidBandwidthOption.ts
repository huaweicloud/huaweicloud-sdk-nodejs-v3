

export class UpdatePrePaidBandwidthOption {
    public name?: string;
    public size?: number;
    public constructor() { 
    }
    public withName(name: string): UpdatePrePaidBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): UpdatePrePaidBandwidthOption {
        this['size'] = size;
        return this;
    }
}