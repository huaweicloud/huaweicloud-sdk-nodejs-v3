import { ExtendProductIosEntity } from './ExtendProductIosEntity';
import { ExtendProductPropertiesEntity } from './ExtendProductPropertiesEntity';
import { ExtendProductSupportFeaturesEntity } from './ExtendProductSupportFeaturesEntity';


export class ExtendProductInfoEntity {
    public type?: string;
    private 'product_id'?: string;
    private 'ecs_flavor_id'?: string;
    private 'arch_types'?: Array<string>;
    private 'charging_mode'?: Array<string>;
    public ios?: Array<ExtendProductIosEntity>;
    private 'support_features'?: Array<ExtendProductSupportFeaturesEntity>;
    public properties?: ExtendProductPropertiesEntity;
    private 'available_zones'?: Array<string>;
    private 'unavailable_zones'?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): ExtendProductInfoEntity {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): ExtendProductInfoEntity {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withEcsFlavorId(ecsFlavorId: string): ExtendProductInfoEntity {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string  | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId(): string | undefined {
        return this['ecs_flavor_id'];
    }
    public withArchTypes(archTypes: Array<string>): ExtendProductInfoEntity {
        this['arch_types'] = archTypes;
        return this;
    }
    public set archTypes(archTypes: Array<string>  | undefined) {
        this['arch_types'] = archTypes;
    }
    public get archTypes(): Array<string> | undefined {
        return this['arch_types'];
    }
    public withChargingMode(chargingMode: Array<string>): ExtendProductInfoEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: Array<string>  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): Array<string> | undefined {
        return this['charging_mode'];
    }
    public withIos(ios: Array<ExtendProductIosEntity>): ExtendProductInfoEntity {
        this['ios'] = ios;
        return this;
    }
    public withSupportFeatures(supportFeatures: Array<ExtendProductSupportFeaturesEntity>): ExtendProductInfoEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: Array<ExtendProductSupportFeaturesEntity>  | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures(): Array<ExtendProductSupportFeaturesEntity> | undefined {
        return this['support_features'];
    }
    public withProperties(properties: ExtendProductPropertiesEntity): ExtendProductInfoEntity {
        this['properties'] = properties;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): ExtendProductInfoEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): ExtendProductInfoEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string>  | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones(): Array<string> | undefined {
        return this['unavailable_zones'];
    }
}