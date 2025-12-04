

export class UpdateBandwidthRequestBody {
    private 'band_width_size'?: number;
    public constructor(bandWidthSize?: number) { 
        this['band_width_size'] = bandWidthSize;
    }
    public withBandWidthSize(bandWidthSize: number): UpdateBandwidthRequestBody {
        this['band_width_size'] = bandWidthSize;
        return this;
    }
    public set bandWidthSize(bandWidthSize: number  | undefined) {
        this['band_width_size'] = bandWidthSize;
    }
    public get bandWidthSize(): number | undefined {
        return this['band_width_size'];
    }
}