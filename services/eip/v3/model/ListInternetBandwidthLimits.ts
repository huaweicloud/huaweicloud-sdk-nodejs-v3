import { ExtLimitPojo } from './ExtLimitPojo';


export class ListInternetBandwidthLimits {
    public id?: string;
    private 'charge_mode'?: string;
    private 'min_size'?: number;
    private 'ext_limit'?: ExtLimitPojo;
    private 'max_size'?: number;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): ListInternetBandwidthLimits {
        this['id'] = id;
        return this;
    }
    public withChargeMode(chargeMode: string): ListInternetBandwidthLimits {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withMinSize(minSize: number): ListInternetBandwidthLimits {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withExtLimit(extLimit: ExtLimitPojo): ListInternetBandwidthLimits {
        this['ext_limit'] = extLimit;
        return this;
    }
    public set extLimit(extLimit: ExtLimitPojo  | undefined) {
        this['ext_limit'] = extLimit;
    }
    public get extLimit(): ExtLimitPojo | undefined {
        return this['ext_limit'];
    }
    public withMaxSize(maxSize: number): ListInternetBandwidthLimits {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
    public withType(type: string): ListInternetBandwidthLimits {
        this['type'] = type;
        return this;
    }
}