

export class SetChargeModesBody {
    private 'charge_mode'?: string;
    private 'product_type'?: string;
    private 'service_area'?: string;
    public constructor(chargeMode?: string, productType?: string, serviceArea?: string) { 
        this['charge_mode'] = chargeMode;
        this['product_type'] = productType;
        this['service_area'] = serviceArea;
    }
    public withChargeMode(chargeMode: string): SetChargeModesBody {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withProductType(productType: string): SetChargeModesBody {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withServiceArea(serviceArea: string): SetChargeModesBody {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
}