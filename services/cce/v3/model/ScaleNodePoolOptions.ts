import { ScaleUpBillingConfigOverride } from './ScaleUpBillingConfigOverride';


export class ScaleNodePoolOptions {
    public scalableChecking?: string;
    public billingConfigOverride?: ScaleUpBillingConfigOverride;
    public constructor() { 
    }
    public withScalableChecking(scalableChecking: string): ScaleNodePoolOptions {
        this['scalableChecking'] = scalableChecking;
        return this;
    }
    public withBillingConfigOverride(billingConfigOverride: ScaleUpBillingConfigOverride): ScaleNodePoolOptions {
        this['billingConfigOverride'] = billingConfigOverride;
        return this;
    }
}