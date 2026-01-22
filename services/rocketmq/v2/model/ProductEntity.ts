import { IOSEntity } from './IOSEntity';
import { ProductEntityProperties } from './ProductEntityProperties';


export class ProductEntity {
    public type?: string;
    private 'product_id'?: string;
    private 'ecs_flavor_id'?: string;
    private 'billing_code'?: string;
    private 'arch_types'?: Array<string>;
    private 'charging_mode'?: Array<string>;
    public ios?: Array<IOSEntity>;
    private 'support_features'?: Array<string>;
    public properties?: ProductEntityProperties;
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
    public withChargingMode(chargingMode: Array<string>): ProductEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: Array<string>  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): Array<string> | undefined {
        return this['charging_mode'];
    }
    public withIos(ios: Array<IOSEntity>): ProductEntity {
        this['ios'] = ios;
        return this;
    }
    public withSupportFeatures(supportFeatures: Array<string>): ProductEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: Array<string>  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): Array<string> | undefined {
        return this['support_features'];
    }
    public withProperties(properties: ProductEntityProperties): ProductEntity {
        this['properties'] = properties;
        return this;
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