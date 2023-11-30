import { RocketMQExtendProductIosEntity } from './RocketMQExtendProductIosEntity';
import { RocketMQExtendProductPropertiesEntity } from './RocketMQExtendProductPropertiesEntity';
import { RocketMQProductSupportFeaturesEntity } from './RocketMQProductSupportFeaturesEntity';


export class RocketMQExtendProductInfoEntity {
    public type?: string;
    private 'product_id'?: string;
    private 'ecs_flavor_id'?: string;
    private 'billing_code'?: string;
    private 'arch_types'?: Array<string>;
    private 'charging_mode'?: Array<string>;
    public ios?: Array<RocketMQExtendProductIosEntity>;
    public properties?: RocketMQExtendProductPropertiesEntity;
    private 'available_zones'?: Array<string>;
    private 'unavailable_zones'?: Array<string>;
    private 'support_features'?: Array<RocketMQProductSupportFeaturesEntity>;
    private 'qingtian_incompatible'?: boolean;
    public constructor() { 
    }
    public withType(type: string): RocketMQExtendProductInfoEntity {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): RocketMQExtendProductInfoEntity {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withEcsFlavorId(ecsFlavorId: string): RocketMQExtendProductInfoEntity {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string  | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId(): string | undefined {
        return this['ecs_flavor_id'];
    }
    public withBillingCode(billingCode: string): RocketMQExtendProductInfoEntity {
        this['billing_code'] = billingCode;
        return this;
    }
    public set billingCode(billingCode: string  | undefined) {
        this['billing_code'] = billingCode;
    }
    public get billingCode(): string | undefined {
        return this['billing_code'];
    }
    public withArchTypes(archTypes: Array<string>): RocketMQExtendProductInfoEntity {
        this['arch_types'] = archTypes;
        return this;
    }
    public set archTypes(archTypes: Array<string>  | undefined) {
        this['arch_types'] = archTypes;
    }
    public get archTypes(): Array<string> | undefined {
        return this['arch_types'];
    }
    public withChargingMode(chargingMode: Array<string>): RocketMQExtendProductInfoEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: Array<string>  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): Array<string> | undefined {
        return this['charging_mode'];
    }
    public withIos(ios: Array<RocketMQExtendProductIosEntity>): RocketMQExtendProductInfoEntity {
        this['ios'] = ios;
        return this;
    }
    public withProperties(properties: RocketMQExtendProductPropertiesEntity): RocketMQExtendProductInfoEntity {
        this['properties'] = properties;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): RocketMQExtendProductInfoEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): RocketMQExtendProductInfoEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
    public withSupportFeatures(supportFeatures: Array<RocketMQProductSupportFeaturesEntity>): RocketMQExtendProductInfoEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: Array<RocketMQProductSupportFeaturesEntity>  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): Array<RocketMQProductSupportFeaturesEntity> | undefined {
        return this['support_features'];
    }
    public withQingtianIncompatible(qingtianIncompatible: boolean): RocketMQExtendProductInfoEntity {
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