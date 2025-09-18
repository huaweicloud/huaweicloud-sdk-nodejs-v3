import { Description } from './Description';
import { NonRequiredName } from './NonRequiredName';
import { UpdatePrepaidOptions } from './UpdatePrepaidOptions';


export class UpdateBandwidthPackage {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'billing_mode'?: UpdateBandwidthPackageBillingModeEnum | number;
    private 'prepaid_options'?: UpdatePrepaidOptions;
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
    public withPrepaidOptions(prepaidOptions: UpdatePrepaidOptions): UpdateBandwidthPackage {
        this['prepaid_options'] = prepaidOptions;
        return this;
    }
    public set prepaidOptions(prepaidOptions: UpdatePrepaidOptions  | undefined) {
        this['prepaid_options'] = prepaidOptions;
    }
    public get prepaidOptions(): UpdatePrepaidOptions | undefined {
        return this['prepaid_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBandwidthPackageBillingModeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_5 = 5,
    NUMBER_6 = 6
}
