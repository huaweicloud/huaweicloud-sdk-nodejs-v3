

export class ProductEntity {
    public type?: string;
    private 'product_id'?: string;
    private 'ecs_flavor_id'?: string;
    private 'billing_code'?: string;
    private 'arch_types'?: Array<string>;
    private 'charging_mode'?: object;
    public ios?: object;
    private 'support_features'?: object;
    public properties?: object;
    private 'available_zones'?: Array<string>;
    private 'unavailable_zones'?: Array<string>;
    private 'qingtian_incompatible'?: boolean;
    public constructor() { 
    }
    public withType(type: string): ProductEntity {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ProductEntity {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withEcsFlavorId(ecsFlavorId: string): ProductEntity {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string  | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId(): string | undefined {
        return this['ecs_flavor_id'];
    }
    public withBillingCode(billingCode: string): ProductEntity {
        this['billing_code'] = billingCode;
        return this;
    }
    public set billingCode(billingCode: string  | undefined) {
        this['billing_code'] = billingCode;
    }
    public get billingCode(): string | undefined {
        return this['billing_code'];
    }
    public withArchTypes(archTypes: Array<string>): ProductEntity {
        this['arch_types'] = archTypes;
        return this;
    }
    public set archTypes(archTypes: Array<string>  | undefined) {
        this['arch_types'] = archTypes;
    }
    public get archTypes(): Array<string> | undefined {
        return this['arch_types'];
    }
    public withChargingMode(chargingMode: object): ProductEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: object  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): object | undefined {
        return this['charging_mode'];
    }
    public withIos(ios: object): ProductEntity {
        this['ios'] = ios;
        return this;
    }
    public withSupportFeatures(supportFeatures: object): ProductEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: object  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): object | undefined {
        return this['support_features'];
    }
    public withProperties(properties: object): ProductEntity {
        this['properties'] = properties;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): ProductEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): ProductEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withQingtianIncompatible(qingtianIncompatible: boolean): ProductEntity {
        this['qingtian_incompatible'] = qingtianIncompatible;
        return this;
    }
    public set qingtianIncompatible(qingtianIncompatible: boolean  | undefined) {
        this['qingtian_incompatible'] = qingtianIncompatible;
    }
    public get qingtianIncompatible(): boolean | undefined {
        return this['qingtian_incompatible'];
    }
}