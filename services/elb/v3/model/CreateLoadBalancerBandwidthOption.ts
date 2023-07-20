

export class CreateLoadBalancerBandwidthOption {
    public name?: string;
    public size?: number;
    private 'charge_mode'?: CreateLoadBalancerBandwidthOptionChargeModeEnum | string;
    private 'share_type'?: CreateLoadBalancerBandwidthOptionShareTypeEnum | string;
    private 'billing_info'?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): CreateLoadBalancerBandwidthOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): CreateLoadBalancerBandwidthOption {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: CreateLoadBalancerBandwidthOptionChargeModeEnum | string): CreateLoadBalancerBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateLoadBalancerBandwidthOptionChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateLoadBalancerBandwidthOptionChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withShareType(shareType: CreateLoadBalancerBandwidthOptionShareTypeEnum | string): CreateLoadBalancerBandwidthOption {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: CreateLoadBalancerBandwidthOptionShareTypeEnum | string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): CreateLoadBalancerBandwidthOptionShareTypeEnum | string | undefined {
        return this['share_type'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerBandwidthOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withId(id: string): CreateLoadBalancerBandwidthOption {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateLoadBalancerBandwidthOptionChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateLoadBalancerBandwidthOptionShareTypeEnum {
    PER = 'PER',
    WHOLE = 'WHOLE'
}
