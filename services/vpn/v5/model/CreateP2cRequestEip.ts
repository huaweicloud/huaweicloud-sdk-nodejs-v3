

export class CreateP2cRequestEip {
    public id?: string;
    public type?: string;
    private 'charge_mode'?: CreateP2cRequestEipChargeModeEnum | string;
    private 'bandwidth_size'?: number;
    private 'bandwidth_name'?: string;
    public constructor() { 
    }
    public withId(id: string): CreateP2cRequestEip {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CreateP2cRequestEip {
        this['type'] = type;
        return this;
    }
    public withChargeMode(chargeMode: CreateP2cRequestEipChargeModeEnum | string): CreateP2cRequestEip {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateP2cRequestEipChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateP2cRequestEipChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): CreateP2cRequestEip {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthName(bandwidthName: string): CreateP2cRequestEip {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateP2cRequestEipChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
