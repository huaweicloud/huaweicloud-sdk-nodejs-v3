import { BillingModeEnum } from './BillingModeEnum';


export class BillingMode {
    private 'billing_mode'?: BillingModeEnum;
    public constructor(billingMode?: BillingModeEnum) { 
        this['billing_mode'] = billingMode;
    }
    public withBillingMode(billingMode: BillingModeEnum): BillingMode {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: BillingModeEnum  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): BillingModeEnum | undefined {
        return this['billing_mode'];
    }
}