

export class PublicipBandwidthInfo {
    public id?: string;
    public size?: number;
    private 'share_type'?: string;
    private 'charge_mode'?: string;
    public name?: string;
    private 'billing_info'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicipBandwidthInfo {
        this['id'] = id;
        return this;
    }
    public withSize(size: number): PublicipBandwidthInfo {
        this['size'] = size;
        return this;
    }
    public withShareType(shareType: string): PublicipBandwidthInfo {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withChargeMode(chargeMode: string): PublicipBandwidthInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withName(name: string): PublicipBandwidthInfo {
        this['name'] = name;
        return this;
    }
    public withBillingInfo(billingInfo: string): PublicipBandwidthInfo {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
}