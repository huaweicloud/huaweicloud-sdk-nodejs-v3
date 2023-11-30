

export class ModifyBandwidthOption {
    public id?: string;
    public name?: string;
    public size?: number;
    private 'charge_mode'?: ModifyBandwidthOptionChargeModeEnum | string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ModifyBandwidthOption {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModifyBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): ModifyBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: ModifyBandwidthOptionChargeModeEnum | string): ModifyBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ModifyBandwidthOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ModifyBandwidthOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic',
    E_95PEAK_PLUS = '95peak_plus'
}
