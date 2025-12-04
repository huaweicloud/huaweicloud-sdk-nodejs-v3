

export class Bandwidth {
    private 'band_width_name'?: string;
    private 'band_width_id'?: string;
    private 'band_width_size'?: number;
    private 'band_width_charge_mode'?: number;
    private 'band_width_share_type'?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withBandWidthName(bandWidthName: string): Bandwidth {
        this['band_width_name'] = bandWidthName;
        return this;
    }
    public set bandWidthName(bandWidthName: string  | undefined) {
        this['band_width_name'] = bandWidthName;
    }
    public get bandWidthName(): string | undefined {
        return this['band_width_name'];
    }
    public withBandWidthId(bandWidthId: string): Bandwidth {
        this['band_width_id'] = bandWidthId;
        return this;
    }
    public set bandWidthId(bandWidthId: string  | undefined) {
        this['band_width_id'] = bandWidthId;
    }
    public get bandWidthId(): string | undefined {
        return this['band_width_id'];
    }
    public withBandWidthSize(bandWidthSize: number): Bandwidth {
        this['band_width_size'] = bandWidthSize;
        return this;
    }
    public set bandWidthSize(bandWidthSize: number  | undefined) {
        this['band_width_size'] = bandWidthSize;
    }
    public get bandWidthSize(): number | undefined {
        return this['band_width_size'];
    }
    public withBandWidthChargeMode(bandWidthChargeMode: number): Bandwidth {
        this['band_width_charge_mode'] = bandWidthChargeMode;
        return this;
    }
    public set bandWidthChargeMode(bandWidthChargeMode: number  | undefined) {
        this['band_width_charge_mode'] = bandWidthChargeMode;
    }
    public get bandWidthChargeMode(): number | undefined {
        return this['band_width_charge_mode'];
    }
    public withBandWidthShareType(bandWidthShareType: number): Bandwidth {
        this['band_width_share_type'] = bandWidthShareType;
        return this;
    }
    public set bandWidthShareType(bandWidthShareType: number  | undefined) {
        this['band_width_share_type'] = bandWidthShareType;
    }
    public get bandWidthShareType(): number | undefined {
        return this['band_width_share_type'];
    }
    public withCreateTime(createTime: string): Bandwidth {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Bandwidth {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}