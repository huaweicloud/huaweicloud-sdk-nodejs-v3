

export class Eip {
    public id?: string;
    public type?: string;
    private 'charge_mode'?: EipChargeModeEnum | string;
    private 'bandwidth_size'?: number;
    public constructor() { 
    }
    public withId(id: string): Eip {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Eip {
        this['type'] = type;
        return this;
    }
    public withChargeMode(chargeMode: EipChargeModeEnum | string): Eip {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: EipChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): EipChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): Eip {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EipChargeModeEnum {
    TRAFFIC = 'TRAFFIC',
    BANDWIDTH = 'BANDWIDTH'
}
