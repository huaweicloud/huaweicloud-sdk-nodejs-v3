

export class SetChargeModesBody {
    private 'charge_mode': string | undefined;
    private 'product_type': string | undefined;
    private 'service_area': string | undefined;
    public constructor(chargeMode?: any, productType?: any, serviceArea?: any) { 
        this['charge_mode'] = chargeMode;
        this['product_type'] = productType;
        this['service_area'] = serviceArea;
    }
    public withChargeMode(chargeMode: string): SetChargeModesBody {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withProductType(productType: string): SetChargeModesBody {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withServiceArea(serviceArea: string): SetChargeModesBody {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
}