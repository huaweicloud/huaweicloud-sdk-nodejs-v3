

export class CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth {
    private 'band_width_id'?: string;
    private 'band_width_size'?: number;
    private 'band_width_charge_mode'?: number;
    private 'band_width_share_type'?: number;
    public constructor(bandWidthChargeMode?: number, bandWidthShareType?: number) { 
        this['band_width_charge_mode'] = bandWidthChargeMode;
        this['band_width_share_type'] = bandWidthShareType;
    }
    public withBandWidthId(bandWidthId: string): CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth {
        this['band_width_id'] = bandWidthId;
        return this;
    }
    public set bandWidthId(bandWidthId: string  | undefined) {
        this['band_width_id'] = bandWidthId;
    }
    public get bandWidthId(): string | undefined {
        return this['band_width_id'];
    }
    public withBandWidthSize(bandWidthSize: number): CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth {
        this['band_width_size'] = bandWidthSize;
        return this;
    }
    public set bandWidthSize(bandWidthSize: number  | undefined) {
        this['band_width_size'] = bandWidthSize;
    }
    public get bandWidthSize(): number | undefined {
        return this['band_width_size'];
    }
    public withBandWidthChargeMode(bandWidthChargeMode: number): CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth {
        this['band_width_charge_mode'] = bandWidthChargeMode;
        return this;
    }
    public set bandWidthChargeMode(bandWidthChargeMode: number  | undefined) {
        this['band_width_charge_mode'] = bandWidthChargeMode;
    }
    public get bandWidthChargeMode(): number | undefined {
        return this['band_width_charge_mode'];
    }
    public withBandWidthShareType(bandWidthShareType: number): CreateCloudPhoneSingleServerRequestBodyPublicIpBandWidth {
        this['band_width_share_type'] = bandWidthShareType;
        return this;
    }
    public set bandWidthShareType(bandWidthShareType: number  | undefined) {
        this['band_width_share_type'] = bandWidthShareType;
    }
    public get bandWidthShareType(): number | undefined {
        return this['band_width_share_type'];
    }
}