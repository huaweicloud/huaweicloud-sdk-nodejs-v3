import { BillingModeEnum } from './BillingModeEnum';


export class BandwidthPackageLineSpecCode {
    public level?: string;
    private 'name_cn'?: string;
    private 'name_en'?: string;
    private 'spec_code'?: string;
    private 'max_bandwidth'?: number;
    private 'min_bandwidth'?: number;
    private 'support_billing_modes'?: Array<BillingModeEnum>;
    public constructor() { 
    }
    public withLevel(level: string): BandwidthPackageLineSpecCode {
        this['level'] = level;
        return this;
    }
    public withNameCn(nameCn: string): BandwidthPackageLineSpecCode {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNameEn(nameEn: string): BandwidthPackageLineSpecCode {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withSpecCode(specCode: string): BandwidthPackageLineSpecCode {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withMaxBandwidth(maxBandwidth: number): BandwidthPackageLineSpecCode {
        this['max_bandwidth'] = maxBandwidth;
        return this;
    }
    public set maxBandwidth(maxBandwidth: number  | undefined) {
        this['max_bandwidth'] = maxBandwidth;
    }
    public get maxBandwidth(): number | undefined {
        return this['max_bandwidth'];
    }
    public withMinBandwidth(minBandwidth: number): BandwidthPackageLineSpecCode {
        this['min_bandwidth'] = minBandwidth;
        return this;
    }
    public set minBandwidth(minBandwidth: number  | undefined) {
        this['min_bandwidth'] = minBandwidth;
    }
    public get minBandwidth(): number | undefined {
        return this['min_bandwidth'];
    }
    public withSupportBillingModes(supportBillingModes: Array<BillingModeEnum>): BandwidthPackageLineSpecCode {
        this['support_billing_modes'] = supportBillingModes;
        return this;
    }
    public set supportBillingModes(supportBillingModes: Array<BillingModeEnum>  | undefined) {
        this['support_billing_modes'] = supportBillingModes;
    }
    public get supportBillingModes(): Array<BillingModeEnum> | undefined {
        return this['support_billing_modes'];
    }
}