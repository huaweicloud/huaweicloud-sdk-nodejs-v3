

export class ApplyDesktopsInternet {
    private 'desktop_ids'?: Array<string>;
    private 'eip_type'?: string;
    private 'eip_charge_mode'?: ApplyDesktopsInternetEipChargeModeEnum | string;
    private 'bandwidth_size'?: number;
    public count?: number;
    public constructor(eipType?: string, eipChargeMode?: string, bandwidthSize?: number) { 
        this['eip_type'] = eipType;
        this['eip_charge_mode'] = eipChargeMode;
        this['bandwidth_size'] = bandwidthSize;
    }
    public withDesktopIds(desktopIds: Array<string>): ApplyDesktopsInternet {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withEipType(eipType: string): ApplyDesktopsInternet {
        this['eip_type'] = eipType;
        return this;
    }
    public set eipType(eipType: string  | undefined) {
        this['eip_type'] = eipType;
    }
    public get eipType(): string | undefined {
        return this['eip_type'];
    }
    public withEipChargeMode(eipChargeMode: ApplyDesktopsInternetEipChargeModeEnum | string): ApplyDesktopsInternet {
        this['eip_charge_mode'] = eipChargeMode;
        return this;
    }
    public set eipChargeMode(eipChargeMode: ApplyDesktopsInternetEipChargeModeEnum | string  | undefined) {
        this['eip_charge_mode'] = eipChargeMode;
    }
    public get eipChargeMode(): ApplyDesktopsInternetEipChargeModeEnum | string | undefined {
        return this['eip_charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): ApplyDesktopsInternet {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withCount(count: number): ApplyDesktopsInternet {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyDesktopsInternetEipChargeModeEnum {
    TRAFFIC = 'TRAFFIC',
    BANDWIDTH = 'BANDWIDTH'
}
