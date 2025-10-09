import { ScaleUpBillingConfigOverride } from './ScaleUpBillingConfigOverride';


export class ScaleNodePoolOptions {
    public scalableChecking?: string;
    public scalePolicy?: ScaleNodePoolOptionsScalePolicyEnum | string;
    public billingConfigOverride?: ScaleUpBillingConfigOverride;
    public constructor() { 
    }
    public withScalableChecking(scalableChecking: string): ScaleNodePoolOptions {
        this['scalableChecking'] = scalableChecking;
        return this;
    }
    public withScalePolicy(scalePolicy: ScaleNodePoolOptionsScalePolicyEnum | string): ScaleNodePoolOptions {
        this['scalePolicy'] = scalePolicy;
        return this;
    }
    public withBillingConfigOverride(billingConfigOverride: ScaleUpBillingConfigOverride): ScaleNodePoolOptions {
        this['billingConfigOverride'] = billingConfigOverride;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScaleNodePoolOptionsScalePolicyEnum {
    AZBALANCE = 'AZBalance',
    RANDOM = 'Random'
}
