import { ScaleUpExtendParam } from './ScaleUpExtendParam';


export class ScaleUpBillingConfigOverride {
    public billingMode?: number;
    public extendParam?: ScaleUpExtendParam;
    public constructor() { 
    }
    public withBillingMode(billingMode: number): ScaleUpBillingConfigOverride {
        this['billingMode'] = billingMode;
        return this;
    }
    public withExtendParam(extendParam: ScaleUpExtendParam): ScaleUpBillingConfigOverride {
        this['extendParam'] = extendParam;
        return this;
    }
}