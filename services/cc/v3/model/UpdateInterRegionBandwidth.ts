

export class UpdateInterRegionBandwidth {
    public bandwidth?: number;
    public constructor(bandwidth?: number) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: number): UpdateInterRegionBandwidth {
        this['bandwidth'] = bandwidth;
        return this;
    }
}