import { ExtLimitPojo } from './ExtLimitPojo';


export class ShowTenantDict {
    public id?: string;
    private 'charge_mode'?: ShowTenantDictChargeModeEnum | string;
    private 'min_size'?: number;
    private 'max_size'?: number;
    private 'ext_limit'?: ExtLimitPojo;
    public constructor() { 
    }
    public withId(id: string): ShowTenantDict {
        this['id'] = id;
        return this;
    }
    public withChargeMode(chargeMode: ShowTenantDictChargeModeEnum | string): ShowTenantDict {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ShowTenantDictChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ShowTenantDictChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withMinSize(minSize: number): ShowTenantDict {
        this['min_size'] = minSize;
        return this;
    }
    public set minSize(minSize: number  | undefined) {
        this['min_size'] = minSize;
    }
    public get minSize(): number | undefined {
        return this['min_size'];
    }
    public withMaxSize(maxSize: number): ShowTenantDict {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: number  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): number | undefined {
        return this['max_size'];
    }
    public withExtLimit(extLimit: ExtLimitPojo): ShowTenantDict {
        this['ext_limit'] = extLimit;
        return this;
    }
    public set extLimit(extLimit: ExtLimitPojo  | undefined) {
        this['ext_limit'] = extLimit;
    }
    public get extLimit(): ExtLimitPojo | undefined {
        return this['ext_limit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTenantDictChargeModeEnum {
    BANDWIDTH = 'bandwidth',
    TRAFFIC = 'traffic'
}
