import { ListEngineIosEntity } from './ListEngineIosEntity';
import { ListEnginePropertiesEntity } from './ListEnginePropertiesEntity';
import { ListEngineSupportFeaturesEntity } from './ListEngineSupportFeaturesEntity';


export class ListEngineProductsEntity {
    public type?: string;
    private 'product_id'?: string;
    private 'ecs_flavor_id'?: string;
    private 'billing_code'?: string;
    private 'arch_types'?: Array<string>;
    private 'charging_mode'?: Array<string>;
    public ios?: Array<ListEngineIosEntity>;
    private 'support_features'?: Array<ListEngineSupportFeaturesEntity>;
    public properties?: ListEnginePropertiesEntity;
    public constructor() { 
    }
    public withType(type: string): ListEngineProductsEntity {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ListEngineProductsEntity {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withEcsFlavorId(ecsFlavorId: string): ListEngineProductsEntity {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string  | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId(): string | undefined {
        return this['ecs_flavor_id'];
    }
    public withBillingCode(billingCode: string): ListEngineProductsEntity {
        this['billing_code'] = billingCode;
        return this;
    }
    public set billingCode(billingCode: string  | undefined) {
        this['billing_code'] = billingCode;
    }
    public get billingCode(): string | undefined {
        return this['billing_code'];
    }
    public withArchTypes(archTypes: Array<string>): ListEngineProductsEntity {
        this['arch_types'] = archTypes;
        return this;
    }
    public set archTypes(archTypes: Array<string>  | undefined) {
        this['arch_types'] = archTypes;
    }
    public get archTypes(): Array<string> | undefined {
        return this['arch_types'];
    }
    public withChargingMode(chargingMode: Array<string>): ListEngineProductsEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: Array<string>  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): Array<string> | undefined {
        return this['charging_mode'];
    }
    public withIos(ios: Array<ListEngineIosEntity>): ListEngineProductsEntity {
        this['ios'] = ios;
        return this;
    }
    public withSupportFeatures(supportFeatures: Array<ListEngineSupportFeaturesEntity>): ListEngineProductsEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: Array<ListEngineSupportFeaturesEntity>  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): Array<ListEngineSupportFeaturesEntity> | undefined {
        return this['support_features'];
    }
    public withProperties(properties: ListEnginePropertiesEntity): ListEngineProductsEntity {
        this['properties'] = properties;
        return this;
    }
}