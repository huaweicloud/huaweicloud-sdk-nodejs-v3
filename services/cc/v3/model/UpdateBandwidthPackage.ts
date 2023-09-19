

export class UpdateBandwidthPackage {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'billing_mode'?: UpdateBandwidthPackageBillingModeEnum | number;
    public constructor() { 
    }
    public withName(name: string): UpdateBandwidthPackage {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateBandwidthPackage {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): UpdateBandwidthPackage {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withBillingMode(billingMode: UpdateBandwidthPackageBillingModeEnum | number): UpdateBandwidthPackage {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: UpdateBandwidthPackageBillingModeEnum | number  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): UpdateBandwidthPackageBillingModeEnum | number | undefined {
        return this['billing_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBandwidthPackageBillingModeEnum {
    NUMBER_5 = 5,
    NUMBER_6 = 6
}
