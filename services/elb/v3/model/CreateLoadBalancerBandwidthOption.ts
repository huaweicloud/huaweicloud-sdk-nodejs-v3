

export class CreateLoadBalancerBandwidthOption {
    public name?: string;
    public size?: number;
    private 'charge_mode'?: CreateLoadBalancerBandwidthOptionChargeModeEnum | undefined;
    private 'share_type'?: CreateLoadBalancerBandwidthOptionShareTypeEnum | undefined;
    private 'billing_info'?: string | undefined;
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
    public withChargeMode(chargeMode: CreateLoadBalancerBandwidthOptionChargeModeEnum): CreateLoadBalancerBandwidthOption {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateLoadBalancerBandwidthOptionChargeModeEnum | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withShareType(shareType: CreateLoadBalancerBandwidthOptionShareTypeEnum): CreateLoadBalancerBandwidthOption {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: CreateLoadBalancerBandwidthOptionShareTypeEnum | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType() {
        return this['share_type'];
    }
    public withBillingInfo(billingInfo: string): CreateLoadBalancerBandwidthOption {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo() {
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
