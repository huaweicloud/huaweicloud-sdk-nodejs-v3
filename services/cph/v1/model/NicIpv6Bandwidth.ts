

export class NicIpv6Bandwidth {
    private 'band_width_id'?: string;
    public constructor(bandWidthId?: string) { 
        this['band_width_id'] = bandWidthId;
    }
    public withBandWidthId(bandWidthId: string): NicIpv6Bandwidth {
        this['band_width_id'] = bandWidthId;
        return this;
    }
    public set bandWidthId(bandWidthId: string  | undefined) {
        this['band_width_id'] = bandWidthId;
    }
    public get bandWidthId(): string | undefined {
        return this['band_width_id'];
    }
}