

export class CreateRequestEip {
    public id?: string;
    public type?: string;
    private 'charge_mode'?: CreateRequestEipChargeModeEnum | string;
    private 'bandwidth_size'?: number;
    private 'bandwidth_name'?: string;
    private 'bandwidth_id'?: string;
    public constructor() { 
    }
    public withId(id: string): CreateRequestEip {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CreateRequestEip {
        this['type'] = type;
        return this;
    }
    public withChargeMode(chargeMode: CreateRequestEipChargeModeEnum | string): CreateRequestEip {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateRequestEipChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateRequestEipChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withBandwidthSize(bandwidthSize: number): CreateRequestEip {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withBandwidthName(bandwidthName: string): CreateRequestEip {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthId(bandwidthId: string): CreateRequestEip {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRequestEipChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
