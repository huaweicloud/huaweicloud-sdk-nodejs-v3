

export class UpdateInternetBandwidthRequestBodyInternetBandwidth {
    public name?: string;
    public description?: string;
    public size?: number;
    private 'charge_mode'?: string;
    private 'ingress_size'?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateInternetBandwidthRequestBodyInternetBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateInternetBandwidthRequestBodyInternetBandwidth {
        this['description'] = description;
        return this;
    }
    public withSize(size: number): UpdateInternetBandwidthRequestBodyInternetBandwidth {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: string): UpdateInternetBandwidthRequestBodyInternetBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withIngressSize(ingressSize: number): UpdateInternetBandwidthRequestBodyInternetBandwidth {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: number  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): number | undefined {
        return this['ingress_size'];
    }
}