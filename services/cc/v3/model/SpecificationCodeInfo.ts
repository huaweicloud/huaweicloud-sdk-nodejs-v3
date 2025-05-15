import { BillingMode } from './BillingMode';
import { BillingModeEnum } from './BillingModeEnum';
import { SpecCode } from './SpecCode';


export class SpecificationCodeInfo {
    private 'spec_code'?: string;
    private 'billing_mode'?: BillingModeEnum;
    private 'max_bandwidth'?: number;
    private 'mim_bandwidth'?: number;
    public constructor(specCode?: string, billingMode?: BillingModeEnum) { 
        this['spec_code'] = specCode;
        this['billing_mode'] = billingMode;
    }
    public withSpecCode(specCode: string): SpecificationCodeInfo {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withBillingMode(billingMode: BillingModeEnum): SpecificationCodeInfo {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: BillingModeEnum  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): BillingModeEnum | undefined {
        return this['billing_mode'];
    }
    public withMaxBandwidth(maxBandwidth: number): SpecificationCodeInfo {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withMimBandwidth(mimBandwidth: number): SpecificationCodeInfo {
        this['mim_bandwidth'] = mimBandwidth;
        return this;
    }
    public set mimBandwidth(mimBandwidth: number  | undefined) {
        this['mim_bandwidth'] = mimBandwidth;
    }
    public get mimBandwidth(): number | undefined {
        return this['mim_bandwidth'];
    }
}